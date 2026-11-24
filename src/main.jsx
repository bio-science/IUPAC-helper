import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { LanguageProvider } from './languages/LanguageProvider.jsx';
import { BUILT_IN_LANGUAGE_CODE, chooseStartingLanguageCode, loadTranslation } from './languages/loadTranslation.js';
import { registerOfflineServiceWorker } from './installApp/registerOfflineServiceWorker.js';
import './styles/app.css';

registerOfflineServiceWorker();

/** The page is drawn once its language has downloaded, so it never flashes up in English first. */
async function downloadStartingLanguage() {
  const code = chooseStartingLanguageCode();
  try {
    return { code, translation: await loadTranslation(code) };
  } catch (error) {
    console.warn(error); // For example, offline in a browser that hasn't saved this language.
    return { code: BUILT_IN_LANGUAGE_CODE, translation: await loadTranslation(BUILT_IN_LANGUAGE_CODE) };
  }
}

downloadStartingLanguage().then((startingLanguage) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LanguageProvider startingLanguage={startingLanguage}>
        <App />
      </LanguageProvider>
    </StrictMode>,
  );
});
