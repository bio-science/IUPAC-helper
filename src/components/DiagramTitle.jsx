/**
 * The title just under the omnibox, at the top of the drawing. It always shows the name,
 * even when the same name is typed in the omnibox, and the molecular formula unless the
 * omnibox already shows that formula.
 *
 * While the name is hidden, a "Show name" button sits where the name will appear.
 * While practising, "New molecule" and "End practise" buttons sit at the end of the line.
 * While a step of "How it was named" is picked, the part of the name it gave is marked
 * (highlightedNameRanges).
 *
 * When the name uses a retained name that is the preferred IUPAC name, such as acetic acid
 * (namingResult.retainedName), a small (?) after it opens a pop-in saying why it isn't built
 * from the chain like other names, and what the systematic name is.
 */
import { useId, useState } from 'react';
import HighlightedText from './HighlightedText.jsx';
import MolecularFormulaText from './MolecularFormulaText.jsx';
import { useTranslation } from '../languages/LanguageProvider.jsx';

export default function DiagramTitle({
  namingResult,
  molecularFormulaText,
  drawingIsEmpty,
  isNameHidden,
  onShowName,
  omniboxShows,
  isPractising,
  onNextMolecule,
  onEndPractise,
  highlightedNameRanges = [],
}) {
  const t = useTranslation();
  const [isRetainedNameOpen, setIsRetainedNameOpen] = useState(false);
  const popInId = useId();
  if (drawingIsEmpty) return null;

  const nameBelongsHere = namingResult.isNameable;
  const showFormula = omniboxShows !== 'formula';
  const { retainedName } = namingResult;
  const showsRetainedName = nameBelongsHere && !isNameHidden && Boolean(retainedName);

  return (
    <header className="diagram-title">
      {!namingResult.isNameable && <p className="diagram-title__not-nameable">{t(namingResult.reasonNotNameable)}</p>}
      {nameBelongsHere && !isNameHidden && <h2 className="diagram-title__name">
          <HighlightedText text={namingResult.iupacName} ranges={highlightedNameRanges} />
          {showsRetainedName && (
            <button
              type="button"
              className="diagram-title__retained-name-button"
              aria-expanded={isRetainedNameOpen}
              aria-controls={popInId}
              title={t('diagramTitle.retainedNameButtonLabel')}
              aria-label={t('diagramTitle.retainedNameButtonLabel')}
              onClick={() => setIsRetainedNameOpen(!isRetainedNameOpen)}
            >
              {t('diagramTitle.retainedNameButton')}
            </button>
          )}
        </h2>}
      {nameBelongsHere && isNameHidden && (
        <button type="button" onClick={onShowName} title={t('diagramTitle.showNameTitle')}>
          {t('diagramTitle.showName')}
        </button>
      )}
      {showsRetainedName && isRetainedNameOpen && (
        <section
          id={popInId}
          className="diagram-title__retained-name"
          aria-label={t('diagramTitle.retainedNameTitle')}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setIsRetainedNameOpen(false);
          }}
        >
          <div className="diagram-title__retained-name-header">
            <strong>{t('diagramTitle.retainedNameTitle')}</strong>
            <button type="button" className="diagram-title__retained-name-close" aria-label={t('diagramTitle.closeRetainedName')} onClick={() => setIsRetainedNameOpen(false)}>
              ×
            </button>
          </div>
          <p>{t(retainedName.explanation)}</p>
          <p>{t('diagramTitle.systematicName', { systematicName: retainedName.systematicName })}</p>
        </section>
      )}
      {showFormula && (
        <p className="diagram-title__formula">
          <MolecularFormulaText formulaText={molecularFormulaText} />
        </p>
      )}
      {isPractising && (
        <span className="diagram-title__practise-buttons">
          <button type="button" className="button--primary" onClick={onNextMolecule} title={t('diagramTitle.newMoleculeTitle')}>
            {t('diagramTitle.newMolecule')}
          </button>
          <button type="button" onClick={onEndPractise} title={t('practise.endTitle')}>
            {t('practise.end')}
          </button>
        </span>
      )}
    </header>
  );
}
