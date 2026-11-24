import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { isAbsolute, join, relative, resolve } from 'node:path';

/**
 * Each language the page can be shown in has one file in src/languages/translations, named
 * by its language code (en-GB.json, cy.json, ...).
 *
 * So that nobody downloads every language, they are not built into the page's main script.
 * Each one becomes its own small script, languages/<code>.<version>.js, loaded only when that
 * language is chosen. Its flag, from the flag-icons package (which has every country), is
 * copied to languages/flags/ the same way. Installing the app saves them all for offline use
 * (see src/installApp/offlineServiceWorker.js).
 *
 * The page finds them with `import { LANGUAGES } from 'virtual:language-files'`: every
 * language's code, its name for itself, and the addresses of its script and flag.
 *
 * They are loaded as scripts rather than fetched because browsers allow scripts, but not
 * fetching, in a page opened straight from disk.
 */

const TRANSLATIONS_FOLDER = 'src/languages/translations';
const FLAGS_FOLDER = 'node_modules/flag-icons/flags/4x3';
export const LANGUAGES_OUTPUT_FOLDER = 'languages';
/** Each language script calls this, which src/languages/loadTranslation.js provides. */
const RECEIVE_TRANSLATION_FUNCTION = 'receiveIupacHelperTranslation';

const VIRTUAL_MODULE_ID = 'virtual:language-files';
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;

function shortHashOf(contents) {
  return createHash('sha256').update(contents).digest('hex').slice(0, 10);
}

/** Every language, read from its translation file, with the files to make for it. */
function readLanguages(projectFolder, { putVersionInFileNames }) {
  const translationsFolder = join(projectFolder, TRANSLATIONS_FOLDER);
  const version = (contents) => (putVersionInFileNames ? `.${shortHashOf(contents)}` : '');

  return readdirSync(translationsFolder)
    .filter((fileName) => fileName.endsWith('.json'))
    .sort()
    .map((fileName) => {
      const code = fileName.slice(0, -'.json'.length);
      const where = `${TRANSLATIONS_FOLDER}/${fileName}`;

      let translation;
      try {
        translation = JSON.parse(readFileSync(join(translationsFolder, fileName), 'utf8'));
      } catch (error) {
        throw new Error(`${where} is not valid JSON: ${error.message}`);
      }
      const { nativeName, flag } = translation.language ?? {};
      if (!nativeName || !flag) {
        throw new Error(`${where} needs "language": { "nativeName": "...", "flag": "..." } at the top.`);
      }
      const flagPath = join(projectFolder, FLAGS_FOLDER, `${flag}.svg`);
      if (!existsSync(flagPath)) {
        throw new Error(`${where} asks for the flag "${flag}", but there is no ${FLAGS_FOLDER}/${flag}.svg.`);
      }

      const script = `${RECEIVE_TRANSLATION_FUNCTION}(${JSON.stringify(code)}, ${JSON.stringify(translation)});\n`;
      const flagSvg = readFileSync(flagPath);
      return {
        code,
        nativeName,
        script,
        scriptFileName: `${LANGUAGES_OUTPUT_FOLDER}/${code}${version(script)}.js`,
        flagSvg,
        flagFileName: `${LANGUAGES_OUTPUT_FOLDER}/flags/${flag}${version(flagSvg)}.svg`,
      };
    });
}

function writeVirtualModule(languages) {
  const list = languages.map(({ code, nativeName, scriptFileName, flagFileName }) => ({
    code,
    nativeName,
    scriptAddress: scriptFileName,
    flagAddress: flagFileName,
  }));
  return [
    `export const RECEIVE_TRANSLATION_FUNCTION = ${JSON.stringify(RECEIVE_TRANSLATION_FUNCTION)};`,
    `export const LANGUAGES = ${JSON.stringify(list, null, 2)};`,
  ].join('\n');
}

export function languageFiles() {
  let projectFolder;
  let isBuilding;
  let languagesInThisBuild;

  return {
    name: 'language-files',
    configResolved(config) {
      projectFolder = config.root;
      isBuilding = config.command === 'build';
    },
    resolveId(id) {
      return id === VIRTUAL_MODULE_ID ? RESOLVED_VIRTUAL_MODULE_ID : null;
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_MODULE_ID) return null;
      const languages = readLanguages(projectFolder, { putVersionInFileNames: isBuilding });
      if (isBuilding) languagesInThisBuild = languages;
      return writeVirtualModule(languages);
    },
    generateBundle() {
      if (!languagesInThisBuild) return;
      const flagsWritten = new Set();
      for (const language of languagesInThisBuild) {
        this.emitFile({ type: 'asset', fileName: language.scriptFileName, source: language.script });
        if (flagsWritten.has(language.flagFileName)) continue;
        flagsWritten.add(language.flagFileName);
        this.emitFile({ type: 'asset', fileName: language.flagFileName, source: language.flagSvg });
      }
    },

    // While editing (npm run dev): serve the same files, read fresh each time, and reload the
    // page when a translation changes.
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const fileName = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).slice(1);
        if (!fileName.startsWith(`${LANGUAGES_OUTPUT_FOLDER}/`)) return next();

        const languages = readLanguages(projectFolder, { putVersionInFileNames: false });
        const scriptLanguage = languages.find((language) => language.scriptFileName === fileName);
        const flagLanguage = languages.find((language) => language.flagFileName === fileName);
        if (scriptLanguage) {
          response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
          response.end(scriptLanguage.script);
        } else if (flagLanguage) {
          response.setHeader('Content-Type', 'image/svg+xml');
          response.end(flagLanguage.flagSvg);
        } else {
          next();
        }
      });

      const translationsFolder = resolve(projectFolder, TRANSLATIONS_FOLDER);
      server.watcher.add(translationsFolder);
      server.watcher.on('all', (_event, changedPath) => {
        const pathInFolder = relative(translationsFolder, changedPath);
        if (pathInFolder.startsWith('..') || isAbsolute(pathInFolder)) return;
        const virtualModule = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID);
        if (virtualModule) server.moduleGraph.invalidateModule(virtualModule);
        server.ws.send({ type: 'full-reload' });
      });
    },
  };
}
