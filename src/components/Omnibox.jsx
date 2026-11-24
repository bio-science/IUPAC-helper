/**
 * The omnibox: one text box at the top of the drawing. It does one of two jobs:
 *
 *   Drawing (guess is null)  it accepts a name or a formula, and the molecule is drawn from it.
 *                            The work of understanding the text is done by interpretOmniboxText.js
 *                            (called from App).
 *   Practising (guess given) the student types their name for the molecule they see. The text
 *                            never changes the drawing; it is checked against guess.correctIupacName.
 *                            A correct answer gets a green tick straight away. A wrong answer gets a
 *                            red cross (and a hint, if we can tell what went wrong) only after the
 *                            student has stopped typing for 2 seconds. A correct answer using cis or
 *                            trans also gets a note giving the E/Z name. Once it is correct, Enter
 *                            moves on to another molecule (guess.onNextMolecule).
 *
 * Everything updates as the student types; there is no submit button.
 *
 * While a step of "How it was named" is picked and the omnibox shows the name, the part of
 * the name the step gave is marked (highlightedNameRanges). A text box can't hold marked text,
 * so the marks are drawn on a copy of the text behind it, in the same place, scrolled with it.
 *
 * When the omnibox switches between its two jobs (practice starting or ending, not each new
 * molecule), if the box is empty its new placeholder text pops in from the left, one letter
 * after another, then pulses in the accent colour, so the student notices the change. A text
 * box's own placeholder can't be animated, so the swap is drawn on a layer over the box, and
 * the real placeholder is hidden until the swap has finished.
 */
import { useEffect, useLayoutEffect, useRef } from 'react';
import HighlightedText from './HighlightedText.jsx';
import { ANSWER_VERDICTS, checkStudentAnswer } from '../chemistry/checkStudentAnswer.js';
import { useChangeAnimation } from '../hooks/useChangeAnimation.js';
import { useDelayedWrongAnswerFeedback } from '../hooks/useDelayedWrongAnswerFeedback.js';
import { useTranslation } from '../languages/LanguageProvider.jsx';

/**
 * When the first letter of the new placeholder starts popping in, and the time over which the
 * rest follow (however long the text is). Kept in step with the timings in app.css.
 */
const LETTERS_START_IN_SECONDS = 0.25;
const LETTERS_SPREAD_IN_SECONDS = 1;

/** Splits text into the letters a reader sees, so an accented letter stays in one piece. */
function splitIntoLetters(text) {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    return Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), (part) => part.segment);
  }
  return Array.from(text);
}

export default function Omnibox({
  omniboxText,
  onOmniboxTextChange,
  omniboxMessage,
  isomerSuggestions,
  chosenIsomerIndex,
  onIsomerChosen,
  highlightedNameRanges = [],
  guess = null,
}) {
  const t = useTranslation();
  const inputReference = useRef(null);
  const marksReference = useRef(null);
  const isGuessing = guess !== null;
  const hasMarks = !isGuessing && highlightedNameRanges.length > 0;
  const placeholderKey = isGuessing ? 'answer.placeholder' : 'omnibox.placeholder';
  const { animation: jobChange, endAnimation: endJobChange } = useChangeAnimation(placeholderKey);
  const isSwappingPlaceholder = jobChange !== null && omniboxText === '';

  // A drawing changed by hand into one that can't be named has no answer to check against.
  const canCheck = isGuessing && guess.correctIupacName !== null;
  const { verdict, hint, note } = canCheck ? checkStudentAnswer(omniboxText, guess.correctIupacName) : {};
  const showWrongAnswerFeedback = useDelayedWrongAnswerFeedback(verdict === ANSWER_VERDICTS.incorrect, omniboxText);
  const isCorrect = verdict === ANSWER_VERDICTS.correct;

  function scrollMarksWithText() {
    if (marksReference.current && inputReference.current) marksReference.current.scrollLeft = inputReference.current.scrollLeft;
  }
  useLayoutEffect(scrollMarksWithText);

  // Each new molecule to name puts the cursor in the box, ready to type.
  const correctIupacName = canCheck ? guess.correctIupacName : null;
  useEffect(() => {
    if (correctIupacName !== null) inputReference.current?.focus();
  }, [correctIupacName]);

  function handleKeyDown(keyboardEvent) {
    if (keyboardEvent.key === 'Enter' && isGuessing && isCorrect) guess.onNextMolecule();
  }

  return (
    <section className="omnibox">
      <div className="omnibox__field">
        {hasMarks && (
          <div className="omnibox__marks" ref={marksReference} aria-hidden="true">
            <HighlightedText text={omniboxText} ranges={highlightedNameRanges} />
          </div>
        )}
        <input
          ref={inputReference}
          type="text"
          className={`omnibox__input ${isGuessing ? 'omnibox__input--guessing' : ''} ${isSwappingPlaceholder ? 'omnibox__input--placeholder-swapping' : ''}`}
          value={omniboxText}
          onChange={(changeEvent) => onOmniboxTextChange(changeEvent.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={scrollMarksWithText}
          onSelect={scrollMarksWithText}
          placeholder={t(placeholderKey)}
          aria-label={t(isGuessing ? 'answer.placeholder' : 'omnibox.label')}
          spellCheck={false}
          autoComplete="off"
        />
        {jobChange !== null && (
          <div
            key={jobChange.id}
            className={`omnibox__job-change ${isGuessing ? 'omnibox__job-change--guessing' : ''}`}
            aria-hidden="true"
            onAnimationEnd={(animationEvent) => {
              if (animationEvent.target === animationEvent.currentTarget) endJobChange();
            }}
          >
            {isSwappingPlaceholder && (
              <>
                <span className="omnibox__placeholder-leaving">{t(jobChange.previousValue)}</span>
                <span className="omnibox__placeholder-arriving">
                  {splitIntoLetters(t(placeholderKey)).map((letter, index, letters) => (
                    <span
                      key={index}
                      className="omnibox__placeholder-letter"
                      style={{ animationDelay: `${LETTERS_START_IN_SECONDS + (index / letters.length) * LETTERS_SPREAD_IN_SECONDS}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </>
            )}
          </div>
        )}
        {isGuessing && (
          <span className="omnibox__mark" aria-live="polite">
            {isCorrect && (
              <span className="mark mark--correct" aria-label={t('answer.correct')}>
                ✓
              </span>
            )}
            {showWrongAnswerFeedback && (
              <span className="mark mark--incorrect" aria-label={t('answer.notCorrect')}>
                ✗
              </span>
            )}
          </span>
        )}
      </div>

      {isGuessing && showWrongAnswerFeedback && hint && <p className="omnibox__message omnibox__message--incorrect">{t(hint)}</p>}
      {isGuessing && isCorrect && note && <p className="omnibox__message omnibox__message--info">{t(note)}</p>}

      {!isGuessing && omniboxMessage && <p className={`omnibox__message omnibox__message--${omniboxMessage.tone}`}>{t(omniboxMessage.text)}</p>}

      {!isGuessing && isomerSuggestions.length > 0 && (
        <div className="omnibox__isomers" role="group" aria-label={t('omnibox.isomersLabel')}>
          {isomerSuggestions.map((isomer, index) => (
            <button
              type="button"
              key={isomer.iupacName}
              className={`isomer-chip ${index === chosenIsomerIndex ? 'isomer-chip--chosen' : ''}`}
              onClick={() => onIsomerChosen(index)}
            >
              {isomer.iupacName}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
