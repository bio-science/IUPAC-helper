/**
 * "How it was named", on the right of the drawing (along its bottom on a phone held upright): the steps of naming the molecule (from
 * listNamingSteps.js) as a list. Picking a step marks the atoms it is about on the drawing
 * and the part of the name it gave, and shows why it was decided that way and which
 * sections of the Blue Book say so. Picking it again unmarks it.
 *
 * A step with more to say (its moreInfo, such as the order of seniority of the groups that
 * can give the ending, or for E and Z, how the groups on each carbon of the C=C were ranked)
 * has a small (?) after its explanation, which opens it in a pop-in.
 *
 * When the preferred IUPAC name uses a retained name, such as acetic acid for ethanoic acid
 * (retainedName), a [P] toggle beside the heading picks which name the steps explain: on, the
 * preferred name, with a step saying why it doesn't follow the systematic rules; off, the
 * systematic name, worked out step by step. A line under the heading says which name it is
 * (explainedName), marked like the name in the title.
 *
 * The arrow tab folds the list away, as the name it explains may be hidden while practising.
 */
import { Fragment, useId, useState } from 'react';
import HighlightedText from './HighlightedText.jsx';
import { useTranslation } from '../languages/LanguageProvider.jsx';

export default function NamingSteps({
  ref,
  isOpen,
  onToggleOpen,
  namingSteps,
  retainedName = null,
  explainedName = '',
  highlightedNameRanges = [],
  isPreferredNameExplained = true,
  onPreferredNameExplainedToggled,
  chosenStepIndex,
  onStepChosen,
}) {
  const t = useTranslation();
  const chosenStep = chosenStepIndex === null ? null : namingSteps[chosenStepIndex];

  return (
    <aside ref={ref} className={`naming-steps ${isOpen ? 'naming-steps--open' : ''}`}>
      <button
        type="button"
        className="naming-steps__tab"
        onClick={onToggleOpen}
        aria-expanded={isOpen}
        title={t('namingSteps.heading')}
      >
        {/* The arrow points the way the list opens or folds away: sideways, or up and down when it is along the bottom. */}
        <span className="naming-steps__arrow" aria-hidden="true">
          {isOpen ? '›' : '‹'}
        </span>
        {!isOpen && ` ${t('namingSteps.heading')}`}
      </button>
      {isOpen && (
        <div className="naming-steps__body">
          <div className="naming-steps__header">
            <h2 className="naming-steps__title">{t('namingSteps.heading')}</h2>
            {retainedName && (
              <button
                type="button"
                className="naming-steps__preferred-toggle"
                aria-pressed={isPreferredNameExplained}
                title={t('namingSteps.preferredNameToggleLabel')}
                aria-label={t('namingSteps.preferredNameToggleLabel')}
                onClick={onPreferredNameExplainedToggled}
              >
                {t('namingSteps.preferredNameToggle')}
              </button>
            )}
          </div>
          {retainedName && (
            <p className="naming-steps__explained-name">
              {t
                .intoParts(isPreferredNameExplained ? 'namingSteps.explainingPreferredName' : 'namingSteps.explainingSystematicName', {
                  name: <HighlightedText text={explainedName} ranges={highlightedNameRanges} />,
                })
                .map((part, index) => (
                  <Fragment key={index}>{part}</Fragment>
                ))}
            </p>
          )}
          <ol className="naming-steps__list" aria-label={t('namingSteps.listLabel')}>
            {namingSteps.map((step, index) => (
              <li key={`${step.stepKind}-${index}`}>
                <button
                  type="button"
                  className={`naming-steps__step ${index === chosenStepIndex ? 'naming-steps__step--chosen' : ''}`}
                  aria-pressed={index === chosenStepIndex}
                  onClick={() => onStepChosen(index === chosenStepIndex ? null : index)}
                >
                  <span className="naming-steps__number">{index + 1}</span>
                  {t(step.title)}
                </button>
              </li>
            ))}
          </ol>
          {chosenStep && (
            <Explanation key={chosenStepIndex} step={chosenStep} />
          )}
        </div>
      )}
    </aside>
  );
}

/** Why the chosen step was decided that way, with its (?) and pop-in when it has more to say. */
function Explanation({ step }) {
  const t = useTranslation();
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const popInId = useId();
  const { moreInfo } = step;

  return (
    <div className="naming-steps__explanation" role="status">
      <p>
        {t(step.explanation)}
        {moreInfo && (
          <>
            {' '}
            <button
              type="button"
              className="naming-steps__more-info-button"
              aria-expanded={isMoreInfoOpen}
              aria-controls={popInId}
              title={t('namingSteps.moreInfo')}
              aria-label={t('namingSteps.moreInfo')}
              onClick={() => setIsMoreInfoOpen(!isMoreInfoOpen)}
            >
              ?
            </button>
          </>
        )}
      </p>
      {moreInfo && isMoreInfoOpen && (
        <section
          id={popInId}
          className="naming-steps__more-info"
          aria-label={t(moreInfo.title)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setIsMoreInfoOpen(false);
          }}
        >
          <div className="naming-steps__more-info-header">
            <strong>{t(moreInfo.title)}</strong>
            <button type="button" className="naming-steps__more-info-close" aria-label={t('namingSteps.closeMoreInfo')} onClick={() => setIsMoreInfoOpen(false)}>
              ×
            </button>
          </div>
          <p>{t(moreInfo.introduction)}</p>
          <ol className="naming-steps__ranked-list">
            {moreInfo.rankedItems.map(({ label, isThisMolecule }) => (
              <li key={label.key} className={isThisMolecule ? 'naming-steps__ranked-item--here' : undefined}>
                {t(label)}
                {isThisMolecule && <span className="naming-steps__here">{t(moreInfo.hereLabel)}</span>}
              </li>
            ))}
          </ol>
          {moreInfo.notes.map((note) => (
            <p key={note.key}>{t(note)}</p>
          ))}
          {moreInfo.breakdown.map(({ heading, lines }, index) => (
            <div key={index} className="naming-steps__breakdown">
              <strong>{t(heading)}</strong>
              <ul>
                {lines.map((line, lineIndex) => (
                  <li key={lineIndex}>{t(line)}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
      {step.notes.map((note) => (
        <p key={note.key}>{t(note)}</p>
      ))}
      <p className="naming-steps__rules">{t('namingSteps.blueBookRules', { rules: step.blueBookRules.join(', ') })}</p>
    </div>
  );
}
