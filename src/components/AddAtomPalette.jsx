/**
 * The "Add atom" menu on the left of the drawing.
 *
 * Carbon is the atom that Ctrl + click adds. The Carbon button switches adding on: while
 * it is on, every click in the drawing adds a carbon, without Ctrl.
 *
 * The O, N and halogen buttons (F, Cl, Br, I) switch on dropping that atom: while one is on, it
 * goes wherever it is dragged (or clicked) to, and what it becomes depends on where that is (see
 * planAtomDrop.js). On a hydrogen, O becomes OH and N becomes NH2; in a bond between two carbons,
 * O becomes -O- and N becomes -NH-, making an ester or amide next to a C=O. With O on, clicking
 * the bond to an OH makes it C=O. Halogens only ever take the place of a hydrogen.
 *
 * Double bond switches making bonds double on: while it is on, clicking a bond makes it double,
 * or single again, just like Ctrl + click does. The bond to an OH becomes C=O.
 *
 * Erase switches erasing on: while it is on, clicking a carbon, bond or group removes it,
 * just like right-clicking does.
 *
 * Only one of these can be on at once. Pressing the button again, or Esc, switches it off.
 *
 * The (?) beside the title opens a few short tips: that bonds can be made double, and that
 * O and N can be dropped into a bond.
 *
 * The arrow tab shrinks the menu to just the atom symbols, so it takes less room but
 * still shows what is selected. Practice also shrinks it (see App.jsx).
 */
import { useId, useState } from 'react';
import { useTranslation } from '../languages/LanguageProvider.jsx';
import { HALOGEN_SYMBOLS } from '../chemistry/carbonSkeleton.js';
import { NITROGEN, OXYGEN } from '../geometry/planAtomDrop.js';

/** The buttons for O and N, which become a group or go in a bond depending on where they are dropped. */
const OXYGEN_AND_NITROGEN_BUTTONS = [
  { choice: OXYGEN, textKey: 'addAtom.oxygen', titleKey: 'addAtom.oxygenTitle' },
  { choice: NITROGEN, textKey: 'addAtom.nitrogen', titleKey: 'addAtom.nitrogenTitle' },
];

/** The tips the (?) beside the title shows, in order. */
const TIP_KEYS = ['addAtom.tipDoubleBonds', 'addAtom.tipIntoBonds', 'addAtom.tipRings'];

/** The message keys for each halogen's button: its name and its tooltip. */
const HALOGEN_TEXT_KEYS = {
  F: { textKey: 'addAtom.fluorine', titleKey: 'addAtom.fluorineTitle' },
  Cl: { textKey: 'addAtom.chlorine', titleKey: 'addAtom.chlorineTitle' },
  Br: { textKey: 'addAtom.bromine', titleKey: 'addAtom.bromineTitle' },
  I: { textKey: 'addAtom.iodine', titleKey: 'addAtom.iodineTitle' },
};

export default function AddAtomPalette({
  ref,
  isOpen,
  onToggleOpen,
  atomToAdd,
  onAtomToAddChosen,
  isEraseModeOn,
  onEraseModeToggled,
  isDoubleBondModeOn,
  onDoubleBondModeToggled,
  drawingIsEmpty,
}) {
  const t = useTranslation();
  const [areTipsOpen, setAreTipsOpen] = useState(false);
  const tipsId = useId();
  /** The label beside each symbol, shown only while the menu is open. */
  const label = (text) => isOpen && <span>{text}</span>;

  return (
    <aside ref={ref} className={`add-atom-palette ${isOpen ? '' : 'add-atom-palette--small'}`}>
      <div className="add-atom-palette__body" role="group" aria-label={t('addAtom.title')}>
        {isOpen && (
          <h2 className="add-atom-palette__title add-atom-palette__title--with-tips">
            {t('addAtom.title')}
            <button
              type="button"
              className="add-atom-palette__tips-button"
              aria-expanded={areTipsOpen}
              aria-controls={tipsId}
              aria-label={t('addAtom.tips')}
              title={t('addAtom.tips')}
              onClick={() => setAreTipsOpen(!areTipsOpen)}
            >
              ?
            </button>
          </h2>
        )}
        {isOpen && areTipsOpen && (
          <section
            id={tipsId}
            className="add-atom-palette__tips"
            aria-label={t('addAtom.tips')}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setAreTipsOpen(false);
            }}
          >
            <ul>
              {TIP_KEYS.map((tipKey) => (
                <li key={tipKey}>{t(tipKey)}</li>
              ))}
            </ul>
          </section>
        )}
        <button
          type="button"
          className={`add-atom-palette__atom button--selected ${atomToAdd === 'C' ? 'add-atom-palette__atom--ready' : ''}`}
          onClick={() => onAtomToAddChosen('C')}
          aria-pressed={atomToAdd === 'C'}
          aria-label={t('addAtom.carbon')}
          title={t('addAtom.carbonTitle')}
        >
          <span className="add-atom-palette__symbol">C</span>
          {label(t('addAtom.carbon'))}
        </button>
        <button type="button" className="add-atom-palette__atom" disabled aria-label={t('addAtom.hydrogen')} title={t('addAtom.hydrogenTitle')}>
          <span className="add-atom-palette__symbol">H</span>
          {label(t('addAtom.hydrogen'))}
        </button>
        {OXYGEN_AND_NITROGEN_BUTTONS.map(({ choice, textKey, titleKey }) => (
          <button
            key={choice}
            type="button"
            className={`add-atom-palette__atom ${atomToAdd === choice ? 'add-atom-palette__atom--ready' : ''}`}
            onClick={() => onAtomToAddChosen(choice)}
            disabled={drawingIsEmpty}
            aria-pressed={atomToAdd === choice}
            aria-label={t(textKey)}
            title={t(titleKey)}
          >
            <span className={`add-atom-palette__symbol add-atom-palette__symbol--${choice}`}>{choice}</span>
            {label(t(textKey))}
          </button>
        ))}
        {isOpen && <h3 className="add-atom-palette__title">{t('addAtom.halogens')}</h3>}
        <div className="add-atom-palette__halogens">
          {HALOGEN_SYMBOLS.map((elementSymbol) => (
            <button
              key={elementSymbol}
              type="button"
              className={`add-atom-palette__atom ${atomToAdd === elementSymbol ? 'add-atom-palette__atom--ready' : ''}`}
              onClick={() => onAtomToAddChosen(elementSymbol)}
              disabled={drawingIsEmpty}
              aria-pressed={atomToAdd === elementSymbol}
              aria-label={t(HALOGEN_TEXT_KEYS[elementSymbol].textKey)}
              title={t(HALOGEN_TEXT_KEYS[elementSymbol].titleKey)}
            >
              <span className={`add-atom-palette__symbol add-atom-palette__symbol--${elementSymbol}`}>{elementSymbol}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className={`add-atom-palette__atom add-atom-palette__double-bond ${isDoubleBondModeOn ? 'add-atom-palette__atom--ready' : ''}`}
          onClick={onDoubleBondModeToggled}
          disabled={drawingIsEmpty}
          aria-pressed={isDoubleBondModeOn}
          aria-label={t('addAtom.doubleBond')}
          title={t('addAtom.doubleBondTitle')}
        >
          <span className="add-atom-palette__symbol add-atom-palette__symbol--not-an-atom">=</span>
          {label(t('addAtom.doubleBond'))}
        </button>
        <button
          type="button"
          className={`add-atom-palette__atom add-atom-palette__erase ${isEraseModeOn ? 'button--danger-selected' : ''}`}
          onClick={onEraseModeToggled}
          disabled={drawingIsEmpty}
          aria-pressed={isEraseModeOn}
          aria-label={t('addAtom.erase')}
          title={t('addAtom.eraseTitle')}
        >
          <span className="add-atom-palette__symbol add-atom-palette__symbol--not-an-atom">✕</span>
          {label(t('addAtom.erase'))}
        </button>
      </div>
      <button
        type="button"
        className="add-atom-palette__tab"
        onClick={onToggleOpen}
        aria-expanded={isOpen}
        aria-label={isOpen ? t('addAtom.makeSmaller') : t('addAtom.makeBigger')}
        title={isOpen ? t('addAtom.smaller') : t('addAtom.bigger')}
      >
        {isOpen ? '‹' : '›'}
      </button>
    </aside>
  );
}
