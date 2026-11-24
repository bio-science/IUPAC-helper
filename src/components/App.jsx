/**
 * The whole page. Holds the app's state and connects the pieces:
 *
 *   InstallAppOffer    on phones and tablets, offers to install the app (top right, looks after itself)
 *   LanguagePicker     the language the page is shown in (top right corner, only when there is a choice)
 *   PractiseButton     practise naming random molecules (top left; while practising, End practise is in the title)
 *   PractiseOptions    while practising, what the random molecules can have in them
 *   Omnibox            type a name, molecular or structural formula -> replaces the molecule;
 *                      while practising, the student types their name for the molecule here instead
 *   DiagramTitle       the name (unless hidden while practising), and the molecular formula unless the omnibox shows it
 *   AddAtomPalette     the Add atom menu on the left of the drawing (Carbon, O, N, halogen, Double bond and Erase switches);
 *                      practice makes it small, and it opens again afterwards unless it was made small by hand
 *   MoleculeCanvas     add, erase, move and turn atoms by hand  -> edits the molecule
 *   NamingSteps        "How it was named", on the right of the drawing: pick a step to mark it on the drawing and in the name
 *
 * The molecule is stored as a carbon skeleton (see src/chemistry/carbonSkeleton.js),
 * and its name is recalculated whenever it changes. Every change made by hand is
 * remembered, so Undo (or Ctrl + Z) can step back through them.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import Omnibox from './Omnibox.jsx';
import AddAtomPalette from './AddAtomPalette.jsx';
import NamingSteps from './NamingSteps.jsx';
import DiagramTitle from './DiagramTitle.jsx';
import MoleculeCanvas from './MoleculeCanvas.jsx';
import DrawingToolbar from './DrawingToolbar.jsx';
import PractiseButton from './PractiseButton.jsx';
import PractiseOptions from './PractiseOptions.jsx';
import Footer from './Footer.jsx';
import InstallAppOffer from './InstallAppOffer.jsx';
import LanguagePicker from './LanguagePicker.jsx';
import { DISPLAY_MODES } from './displayModes.js';
import { useTranslation } from '../languages/LanguageProvider.jsx';
import { useSubscriptsKeptWhenCopying } from '../hooks/useSubscriptsKeptWhenCopying.js';
import { useElementSize } from '../hooks/useElementSize.js';
import { message } from '../languages/translate.js';
import { countAtomsInMolecule, createEmptyCarbonSkeleton, isSkeletonEmpty } from '../chemistry/carbonSkeleton.js';
import { nameCarbonSkeleton } from '../chemistry/nameCarbonSkeleton.js';
import { EXPLAINED_NAMES, listNamingSteps } from '../chemistry/listNamingSteps.js';
import { formatMolecularFormula } from '../chemistry/molecularFormula.js';
import { interpretOmniboxText } from '../chemistry/interpretOmniboxText.js';
import { generateRandomGuessMolecule, generateStartingMolecule } from '../chemistry/generateRandomGuessMolecule.js';
import { hasPracticeMoleculeChanged } from '../chemistry/hasPracticeMoleculeChanged.js';
import { DEFAULT_PRACTICE_PRESET, PRACTICE_PRESETS } from '../chemistry/practiceFeatures.js';
import { checkStudentAnswer, ANSWER_VERDICTS } from '../chemistry/checkStudentAnswer.js';
import { zigzagStraightChains } from '../geometry/zigzagStraightChains.js';
import { keepGroupsPointingTheSameWay } from '../geometry/placeAtomsAroundCarbons.js';
import { bendChainsAtRandom } from '../geometry/bendChainsAtRandom.js';

/** Undo remembers at most this many steps. */
const LONGEST_UNDO_HISTORY = 100;

/** True while the student is typing in a text box, where Ctrl + Z should undo their typing instead. */
function isTypingInTextBox(keyboardEvent) {
  return keyboardEvent.target instanceof HTMLElement && keyboardEvent.target.matches('input, textarea');
}

export default function App() {
  const t = useTranslation();
  useSubscriptsKeptWhenCopying();
  // The page opens with a random molecule (the same kind Practise uses), so it is never empty.
  // The omnibox starts empty; the molecule's name is in the title underneath.
  const [startingMolecule] = useState(() => generateStartingMolecule());
  const [carbonSkeleton, setCarbonSkeleton] = useState(startingMolecule.carbonSkeleton);
  const [omniboxText, setOmniboxText] = useState('');
  /**
   * 'name', 'formula' (molecular) or 'structuralFormula' while the omnibox shows one of those
   * for the drawn molecule, otherwise null.
   */
  const [omniboxShows, setOmniboxShows] = useState(null);
  /** { tone: 'hint' | 'warning' | 'info', text }, where text is a message (see src/languages/translate.js). */
  const [omniboxMessage, setOmniboxMessage] = useState(null);
  /**
   * True while the omnibox holds text that hasn't drawn a molecule (a name still being typed,
   * or a formula with no isomers that can be drawn), so the molecule and title shown are still
   * the earlier ones and are greyed out a little. Emptying the omnibox, or anything that shows
   * a molecule, makes it false again.
   */
  const [isDrawingOutOfDate, setIsDrawingOutOfDate] = useState(false);
  const [isomerSuggestions, setIsomerSuggestions] = useState([]);
  const [chosenIsomerIndex, setChosenIsomerIndex] = useState(null);
  const [displayMode, setDisplayMode] = useState(DISPLAY_MODES.displayed);
  const [isEraseModeOn, setIsEraseModeOn] = useState(false);
  /** While on, clicking a bond makes it double or single, as Ctrl + click does. */
  const [isDoubleBondModeOn, setIsDoubleBondModeOn] = useState(false);
  /** The atom each click adds while the Add atom menu has one switched on: 'C', 'OH', 'F', 'Cl', 'Br', 'I', or null. */
  const [atomToAdd, setAtomToAdd] = useState(null);
  const [isAddAtomPaletteOpen, setIsAddAtomPaletteOpen] = useState(true);
  /** True while the Add atom menu is small only because practice made it so; it opens again when practice ends. */
  const [wasAddAtomPaletteShrunkByPractice, setWasAddAtomPaletteShrunkByPractice] = useState(false);
  /** Goes up by one each time a whole new molecule is shown, so the drawing area can show it whole. */
  const [viewResetRequestCount, setViewResetRequestCount] = useState(0);
  /** Earlier versions of the drawing, oldest first, for Undo. */
  const [undoHistory, setUndoHistory] = useState([]);
  const [isNameHidden, setIsNameHidden] = useState(false);
  const [isGuessModeActive, setIsGuessModeActive] = useState(false);
  const [studentAnswerText, setStudentAnswerText] = useState('');
  /** The molecule practice showed, { carbonSkeleton, iupacName }, so it can be put back if changed by hand; null when not practising. */
  const [practiceMolecule, setPracticeMolecule] = useState(null);
  /** What the practice molecules can have in them: the ids of the ticked features (src/chemistry/practiceFeatures.js). */
  const [practiceFeatureIds, setPracticeFeatureIds] = useState(PRACTICE_PRESETS[DEFAULT_PRACTICE_PRESET]);
  const [isNamingStepsOpen, setIsNamingStepsOpen] = useState(false);
  /** The step of "How it was named" that is picked, { iupacName, index }, or null. It is for that name only. */
  const [chosenNamingStep, setChosenNamingStep] = useState(null);
  /** Whether "How it was named" explains the preferred IUPAC name ([P] on) or the systematic name, when they differ. */
  const [isPreferredNameExplained, setIsPreferredNameExplained] = useState(true);

  const namingResult = useMemo(() => nameCarbonSkeleton(carbonSkeleton), [carbonSkeleton]);
  const atomCounts = countAtomsInMolecule(carbonSkeleton);
  const drawingIsEmpty = isSkeletonEmpty(carbonSkeleton);
  const practiceMoleculeHasChanged = hasPracticeMoleculeChanged(practiceMolecule?.iupacName ?? null, namingResult);
  // The steps give the name away, so they are only there while it is shown.
  const canShowNamingSteps = namingResult.isNameable && !isNameHidden;
  const explainedName = isPreferredNameExplained ? EXPLAINED_NAMES.preferredName : EXPLAINED_NAMES.systematicName;
  const namingSteps = useMemo(
    () => (canShowNamingSteps && isNamingStepsOpen ? listNamingSteps(carbonSkeleton, namingResult, { explain: explainedName }) : []),
    [canShowNamingSteps, isNamingStepsOpen, carbonSkeleton, namingResult, explainedName],
  );
  // The name the steps are about: the systematic one only when it differs from the PIN and [P] is off.
  const explainedNameText = namingResult.retainedName && !isPreferredNameExplained ? namingResult.systematicName : namingResult.iupacName;
  const chosenStepIndex =
    chosenNamingStep !== null && namingResult.isNameable && chosenNamingStep.iupacName === namingResult.iupacName ? chosenNamingStep.index : null;
  const chosenStep = (chosenStepIndex !== null && namingSteps[chosenStepIndex]) || null;
  const highlightedNameRanges = chosenStep?.nameRanges ?? [];
  // The menus at the sides of the drawing, measured so the molecule can be shown in the room between them.
  const [addAtomPaletteReference, addAtomPaletteSize] = useElementSize();
  const [namingStepsReference, namingStepsSize] = useElementSize();

  /** The skeletal formula needs a corner at every carbon, so straight chains get a slight zigzag. */
  function arrangeForView(skeleton, viewMode = displayMode) {
    return viewMode === DISPLAY_MODES.skeletal ? keepGroupsPointingTheSameWay(skeleton, zigzagStraightChains(skeleton)) : skeleton;
  }

  function rememberCurrentDrawingForUndo() {
    setUndoHistory((history) => [...history.slice(-(LONGEST_UNDO_HISTORY - 1)), carbonSkeleton]);
  }

  /** Swaps in a whole new molecule, and clears any answer typed for the old one. */
  function showNewMolecule(newCarbonSkeleton) {
    setCarbonSkeleton(arrangeForView(newCarbonSkeleton));
    setStudentAnswerText('');
    setViewResetRequestCount((count) => count + 1);
    setUndoHistory([]);
    setIsDrawingOutOfDate(false);
  }

  function clearOmniboxSuggestions() {
    setOmniboxMessage(null);
    setIsomerSuggestions([]);
    setChosenIsomerIndex(null);
  }

  function handleOmniboxTextChange(newText) {
    setOmniboxText(newText);
    const interpretation = interpretOmniboxText(newText);
    const omniboxShowsForEachKind = { name: 'name', molecularFormula: 'formula', structuralFormula: 'structuralFormula' };
    setOmniboxShows(omniboxShowsForEachKind[interpretation.kind] ?? null);

    if (interpretation.kind === 'empty') {
      // The molecule shown stays as it was before typing began.
      clearOmniboxSuggestions();
      setIsDrawingOutOfDate(false);
      return;
    }

    if (interpretation.kind === 'notRecognised') {
      // Leave the current drawing alone: the student is probably still typing.
      setIsDrawingOutOfDate(true);
      setOmniboxMessage({ tone: 'hint', text: interpretation.message });
      setIsomerSuggestions([]);
      setChosenIsomerIndex(null);
      return;
    }

    if (interpretation.kind === 'structuralFormula') {
      // The molecule exactly as written; the title underneath gives its name and molecular formula.
      showNewMolecule(interpretation.carbonSkeleton);
      clearOmniboxSuggestions();
      return;
    }

    if (interpretation.kind === 'name') {
      showNewMolecule(interpretation.carbonSkeleton);
      setIsomerSuggestions([]);
      setChosenIsomerIndex(null);
      // The omnibox only draws from what is typed outside practice, so the name is never hidden here.
      if (interpretation.typedNameIsCorrectIupacName || interpretation.correctIupacName === null) {
        setOmniboxMessage(interpretation.note ? { tone: 'info', text: interpretation.note } : null);
      } else {
        setOmniboxMessage({ tone: 'warning', text: message('omnibox.drawsButIupacNameIs', { name: interpretation.correctIupacName }) });
      }
      return;
    }

    if (interpretation.kind === 'molecularFormula') {
      const { nameableIsomers } = interpretation;
      if (nameableIsomers.length === 0) {
        // Every isomer has a branched side chain, which can't be named yet.
        setIsDrawingOutOfDate(true);
        setOmniboxMessage({ tone: 'hint', text: interpretation.message });
        setIsomerSuggestions([]);
        setChosenIsomerIndex(null);
        return;
      }
      showNewMolecule(nameableIsomers[0].carbonSkeleton);
      setIsomerSuggestions(nameableIsomers);
      setChosenIsomerIndex(0);
      setOmniboxMessage({ tone: 'info', text: interpretation.message });
    }
  }

  function handleIsomerChosen(isomerIndex) {
    setChosenIsomerIndex(isomerIndex);
    showNewMolecule(isomerSuggestions[isomerIndex].carbonSkeleton);
  }

  /**
   * Shows a drawing changed by hand. What was typed in the omnibox no longer describes it, so
   * the omnibox is emptied; the new name is in the title.
   *
   * While practising, a change that gives a different molecule hides its name again, even if
   * the name of the one before was guessed or shown, unless the answer typed is already right
   * for the new one.
   */
  function showEditedDrawing(editedCarbonSkeleton) {
    setCarbonSkeleton(arrangeForView(editedCarbonSkeleton));
    setIsDrawingOutOfDate(false);
    clearOmniboxSuggestions();
    setOmniboxText('');
    setOmniboxShows(null);
    if (isGuessModeActive) {
      const editedNamingResult = nameCarbonSkeleton(editedCarbonSkeleton);
      const isSameName = editedNamingResult.isNameable && namingResult.isNameable && editedNamingResult.iupacName === namingResult.iupacName;
      const answerIsRight =
        editedNamingResult.isNameable && checkStudentAnswer(studentAnswerText, editedNamingResult.iupacName).verdict === ANSWER_VERDICTS.correct;
      if (!isSameName && !answerIsRight) setIsNameHidden(true);
    }
  }

  /** The student added or erased carbons by hand. */
  function handleCarbonSkeletonEdited(editedCarbonSkeleton) {
    rememberCurrentDrawingForUndo();
    showEditedDrawing(editedCarbonSkeleton);
  }

  /** Atoms were moved or turned. The molecule is the same, so the name, omnibox and answer stay as they are. */
  function handleCarbonPositionsChanged(rearrangedCarbonSkeleton) {
    rememberCurrentDrawingForUndo();
    setCarbonSkeleton(rearrangedCarbonSkeleton);
  }

  function handleRemoveAll() {
    rememberCurrentDrawingForUndo();
    showEditedDrawing(createEmptyCarbonSkeleton());
    setIsEraseModeOn(false);
    setIsDoubleBondModeOn(false);
    setAtomToAdd(null);
  }

  /** Opening "How it was named" shows the whole molecule in the room left beside it. */
  function handlePreferredNameExplainedToggled() {
    setChosenNamingStep(null);
    setIsPreferredNameExplained(!isPreferredNameExplained);
  }

  function handleNamingStepsToggled() {
    if (!isNamingStepsOpen) setViewResetRequestCount((count) => count + 1);
    setIsNamingStepsOpen(!isNamingStepsOpen);
  }

  function handleUndo() {
    if (undoHistory.length === 0) return;
    showEditedDrawing(undoHistory[undoHistory.length - 1]);
    setUndoHistory(undoHistory.slice(0, -1));
  }

  function handleDisplayModeChosen(newDisplayMode) {
    setDisplayMode(newDisplayMode);
    setCarbonSkeleton(arrangeForView(carbonSkeleton, newDisplayMode));
  }

  // Adding, making bonds double and erasing are switches in the Add atom menu. Only one can be on at a time.
  function handleAtomToAddChosen(symbol) {
    setAtomToAdd(atomToAdd === symbol ? null : symbol);
    setIsEraseModeOn(false);
    setIsDoubleBondModeOn(false);
  }

  function handleEraseModeToggled() {
    setIsEraseModeOn(!isEraseModeOn);
    setIsDoubleBondModeOn(false);
    setAtomToAdd(null);
  }

  function handleDoubleBondModeToggled() {
    setIsDoubleBondModeOn(!isDoubleBondModeOn);
    setIsEraseModeOn(false);
    setAtomToAdd(null);
  }

  // Keyboard shortcuts: Ctrl + Z to undo, Esc to switch off adding, making bonds double or erasing.
  const latestHandleUndo = useRef(handleUndo);
  latestHandleUndo.current = handleUndo;
  useEffect(() => {
    function handleKeyDown(keyboardEvent) {
      if (keyboardEvent.key === 'Escape') {
        setAtomToAdd(null);
        setIsEraseModeOn(false);
        setIsDoubleBondModeOn(false);
      }
      const isUndoShortcut = (keyboardEvent.ctrlKey || keyboardEvent.metaKey) && keyboardEvent.key.toLowerCase() === 'z';
      if (isUndoShortcut && !keyboardEvent.shiftKey && !isTypingInTextBox(keyboardEvent)) {
        keyboardEvent.preventDefault();
        latestHandleUndo.current();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleShowName() {
    setIsNameHidden(false);
  }

  /** Once the student gets the name right, it appears in the title until the next molecule. */
  function handleStudentAnswerChange(newAnswerText) {
    setStudentAnswerText(newAnswerText);
    if (namingResult.isNameable && checkStudentAnswer(newAnswerText, namingResult.iupacName).verdict === ANSWER_VERDICTS.correct) {
      setIsNameHidden(false);
    }
  }

  /** A new random molecule to name, with its name hidden and a fresh answer box. */
  function showNextGuessMolecule() {
    const { carbonSkeleton: guessSkeleton } = generateRandomGuessMolecule({
      nameToAvoid: namingResult.isNameable ? namingResult.iupacName : null,
      tickedFeatureIds: practiceFeatureIds,
    });
    // Sometimes with a few bonds turned, so the longest chain isn't always the straight one.
    // The name is worked out after turning, as a turn can change a C=C from E to Z.
    const bentSkeleton = bendChainsAtRandom(guessSkeleton);
    setPracticeMolecule({ carbonSkeleton: bentSkeleton, iupacName: nameCarbonSkeleton(bentSkeleton).iupacName });
    showNewMolecule(bentSkeleton);
    setIsNameHidden(true);
    setOmniboxText('');
    setOmniboxShows(null);
    clearOmniboxSuggestions();
  }

  function handlePractiseToggled() {
    if (isGuessModeActive) {
      setIsGuessModeActive(false);
      setIsNameHidden(false);
      setPracticeMolecule(null);
      setStudentAnswerText('');
      // The omnibox goes back to drawing from what is typed, starting empty.
      clearOmniboxSuggestions();
      setIsDrawingOutOfDate(false);
      setOmniboxText('');
      setOmniboxShows(null);
      if (wasAddAtomPaletteShrunkByPractice) setIsAddAtomPaletteOpen(true);
      setWasAddAtomPaletteShrunkByPractice(false);
    } else {
      setIsGuessModeActive(true);
      // The Add atom menu is made small to leave more room for the molecule. If it was already
      // small, it was made so by hand, and stays small after practice too.
      if (isAddAtomPaletteOpen) {
        setIsAddAtomPaletteOpen(false);
        setWasAddAtomPaletteShrunkByPractice(true);
      }
      showNextGuessMolecule();
    }
  }

  /** Opening or shrinking the Add atom menu by hand means practice no longer decides how it is left. */
  function handleAddAtomPaletteToggled() {
    setIsAddAtomPaletteOpen(!isAddAtomPaletteOpen);
    setWasAddAtomPaletteShrunkByPractice(false);
  }

  /** Puts back the molecule practice showed, after it was changed by hand. Undo can bring the change back. */
  function handlePutPracticeMoleculeBack() {
    handleCarbonSkeletonEdited(practiceMolecule.carbonSkeleton);
  }

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__titles">
          <h1>{t('app.title')}</h1>
          <p>{t('app.subtitle')}</p>
        </div>
        <InstallAppOffer />
        <LanguagePicker />
      </header>

      <main className={`diagram-card ${isDrawingOutOfDate ? 'diagram-card--out-of-date' : ''}`}>
        <div className="diagram-card__top">
          <div className="diagram-card__corner-buttons">
            {!isGuessModeActive && <PractiseButton isPractising={false} onPractiseToggled={handlePractiseToggled} />}
            {isGuessModeActive && <PractiseOptions tickedFeatureIds={practiceFeatureIds} onTickedFeaturesChange={setPracticeFeatureIds} />}
            <span className="diagram-card__corner-spacer" />
            <button type="button" onClick={() => setViewResetRequestCount((count) => count + 1)} title={t('drawingButtons.resetViewTitle')}>
              {t('drawingButtons.resetView')}
            </button>
            <button type="button" onClick={handleRemoveAll} disabled={drawingIsEmpty} title={t('drawingButtons.removeAllTitle')}>
              {t('drawingButtons.removeAll')}
            </button>
          </div>
          <div className="diagram-card__top-middle">
            {/* While practising, the omnibox is the answer box, all through practice, even after "Show name". */}
            <Omnibox
              omniboxText={isGuessModeActive ? studentAnswerText : omniboxText}
              onOmniboxTextChange={isGuessModeActive ? handleStudentAnswerChange : handleOmniboxTextChange}
              omniboxMessage={omniboxMessage}
              isomerSuggestions={isomerSuggestions}
              chosenIsomerIndex={chosenIsomerIndex}
              onIsomerChosen={handleIsomerChosen}
              highlightedNameRanges={omniboxText === explainedNameText ? highlightedNameRanges : []}
              guess={
                isGuessModeActive
                  ? { correctIupacName: namingResult.isNameable ? namingResult.iupacName : null, onNextMolecule: showNextGuessMolecule }
                  : null
              }
            />
            <DiagramTitle
              namingResult={namingResult}
              molecularFormulaText={formatMolecularFormula(atomCounts)}
              drawingIsEmpty={drawingIsEmpty}
              isNameHidden={isNameHidden}
              onShowName={handleShowName}
              omniboxShows={isGuessModeActive ? null : omniboxShows}
              isPractising={isGuessModeActive}
              onNextMolecule={showNextGuessMolecule}
              onEndPractise={handlePractiseToggled}
              highlightedNameRanges={explainedNameText === namingResult.iupacName ? highlightedNameRanges : []}
            />
          </div>
        </div>

        <div className="diagram-card__drawing">
          <MoleculeCanvas
            carbonSkeleton={carbonSkeleton}
            displayMode={displayMode}
            isEraseModeOn={isEraseModeOn && !drawingIsEmpty}
            isDoubleBondModeOn={isDoubleBondModeOn && !drawingIsEmpty}
            atomToAdd={atomToAdd === 'C' || !drawingIsEmpty ? atomToAdd : null}
            viewResetRequestCount={viewResetRequestCount}
            onCarbonSkeletonEdited={handleCarbonSkeletonEdited}
            onCarbonPositionsChanged={handleCarbonPositionsChanged}
            namingStep={chosenStep}
            coveredLeft={addAtomPaletteSize.width}
            coveredRight={canShowNamingSteps && isNamingStepsOpen ? namingStepsSize.width : 0}
          />
          <AddAtomPalette
            ref={addAtomPaletteReference}
            isOpen={isAddAtomPaletteOpen}
            onToggleOpen={handleAddAtomPaletteToggled}
            atomToAdd={atomToAdd === 'C' || !drawingIsEmpty ? atomToAdd : null}
            onAtomToAddChosen={handleAtomToAddChosen}
            isEraseModeOn={isEraseModeOn && !drawingIsEmpty}
            onEraseModeToggled={handleEraseModeToggled}
            isDoubleBondModeOn={isDoubleBondModeOn && !drawingIsEmpty}
            onDoubleBondModeToggled={handleDoubleBondModeToggled}
            drawingIsEmpty={drawingIsEmpty}
          />
          {canShowNamingSteps && (
            <NamingSteps
              ref={namingStepsReference}
              isOpen={isNamingStepsOpen}
              onToggleOpen={handleNamingStepsToggled}
              namingSteps={namingSteps}
              retainedName={namingResult.retainedName ?? null}
              explainedName={explainedNameText}
              highlightedNameRanges={highlightedNameRanges}
              isPreferredNameExplained={isPreferredNameExplained}
              onPreferredNameExplainedToggled={handlePreferredNameExplainedToggled}
              chosenStepIndex={chosenStep ? chosenStepIndex : null}
              onStepChosen={(index) => setChosenNamingStep(index === null ? null : { iupacName: namingResult.iupacName, index })}
            />
          )}
        </div>

        {/* Undo, then (while practising, after the practice molecule was changed by hand) a note and Restore beside it. */}
        <div className="diagram-card__bottom">
          <button
            type="button"
            className="diagram-card__undo"
            onClick={handleUndo}
            disabled={undoHistory.length === 0}
            title={t('drawingButtons.undoTitle')}
          >
            {t('drawingButtons.undo')}
          </button>
          {practiceMoleculeHasChanged && (
            <div className="practice-changed" role="status">
              <span>{t('practise.moleculeChanged')}</span>
              <button type="button" className="diagram-card__undo" onClick={handlePutPracticeMoleculeBack} title={t('practise.restoreTitle')}>
                {t('practise.restore')}
              </button>
            </div>
          )}
        </div>

        <div className="diagram-card__controls">
          <DrawingToolbar
            displayMode={displayMode}
            onDisplayModeChosen={handleDisplayModeChosen}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
