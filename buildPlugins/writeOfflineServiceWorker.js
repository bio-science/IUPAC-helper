import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { LANGUAGES_OUTPUT_FOLDER } from './languageFiles.js';

const SERVICE_WORKER_SOURCE = 'src/installApp/offlineServiceWorker.js';
const SERVICE_WORKER_FILE_NAME = 'sw.js';

/** Every file under a folder, as paths relative to it written with forward slashes. */
function listFilesIn(folder) {
  return readdirSync(folder, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => relative(folder, join(entry.parentPath, entry.name)).split(sep).join('/'))
    .sort();
}

/**
 * After the site is built, writes dist/sw.js: the service worker in SERVICE_WORKER_SOURCE,
 * told which files to save for offline use and given a version number made from their
 * contents. Every change to the site gives a new version, so devices fetch the new files.
 *
 * The languages (see languageFiles.js) are listed separately, as they are only saved
 * when chosen, or all at once when the app is installed.
 */
export function writeOfflineServiceWorker() {
  let projectFolder;
  let outputFolder;
  return {
    name: 'write-offline-service-worker',
    apply: 'build',
    configResolved(config) {
      projectFolder = config.root;
      outputFolder = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const builtFiles = listFilesIn(outputFolder).filter((file) => file !== SERVICE_WORKER_FILE_NAME);

      const contentsHash = createHash('sha256');
      for (const file of builtFiles) {
        contentsHash.update(file);
        contentsHash.update(readFileSync(join(outputFolder, file)));
      }
      const version = contentsHash.digest('hex').slice(0, 12);

      const isLanguageFile = (file) => file.startsWith(`${LANGUAGES_OUTPUT_FOLDER}/`);
      const filesToSave = ['./', ...builtFiles.filter((file) => !isLanguageFile(file))];
      const languageFilesToSave = builtFiles.filter(isLanguageFile);
      const serviceWorker = [
        `const CACHE_NAME = 'iupac-helper-${version}';`,
        `const FILES_TO_SAVE = ${JSON.stringify(filesToSave, null, 2)};`,
        `const LANGUAGE_FILES = ${JSON.stringify(languageFilesToSave, null, 2)};`,
        '',
        readFileSync(join(projectFolder, SERVICE_WORKER_SOURCE), 'utf8'),
      ].join('\n');
      writeFileSync(join(outputFolder, SERVICE_WORKER_FILE_NAME), serviceWorker);
    },
  };
}
