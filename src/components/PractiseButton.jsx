/**
 * The "Practise" button in the top-left corner of the drawing. While practising, the app
 * draws a random molecule with its name hidden, and the student types its name in the
 * omnibox. App hides this button then: "End practise" sits next to "New molecule" instead.
 */
import { useTranslation } from '../languages/LanguageProvider.jsx';

export default function PractiseButton({ isPractising, onPractiseToggled }) {
  const t = useTranslation();
  return (
    <button
      type="button"
      className={isPractising ? '' : 'button--primary'}
      onClick={onPractiseToggled}
      title={isPractising ? t('practise.endTitle') : t('practise.startTitle')}
    >
      {isPractising ? t('practise.end') : t('practise.start')}
    </button>
  );
}
