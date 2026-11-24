import { useTranslation } from '../languages/LanguageProvider.jsx';

export default function Footer() {
  const t = useTranslation();
  return <footer className="footer">{t('footer')}</footer>;
}
