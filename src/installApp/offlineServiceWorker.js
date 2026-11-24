/**
 * The service worker: keeps a copy of every file of the app on the device, so it opens
 * and works with no internet connection.
 *
 * This file is not part of the page. When the site is built, buildPlugins/writeOfflineServiceWorker.js
 * copies it to dist/sw.js and puts these lines before it:
 *
 *   const CACHE_NAME = 'iupac-helper-<version>';      changes whenever any file changes
 *   const FILES_TO_SAVE = ['./', 'index.html', ...];  every file in the built site, except...
 *   const LANGUAGE_FILES = ['languages/cy.<version>.js', ...];   ...the languages and their flags
 *
 * Languages are only saved once they are used, so a visit doesn't download every language.
 * The installed app asks for all of them to be saved (see registerOfflineServiceWorker.js),
 * so any language can be chosen offline.
 */
/* global CACHE_NAME, FILES_TO_SAVE, LANGUAGE_FILES */

/** Saved alongside the files once every language has been saved, so later versions save them all too. */
const EVERY_LANGUAGE_SAVED_MARKER = 'every-language-saved';

const isLanguageFile = (url) => url.startsWith(new URL('languages/', self.registration.scope).href);

/**
 * Saves the language files: any that an older version already saved (a file's name changes
 * whenever its contents do, so those are still right), and, if downloadMissingOnes is true,
 * every other one too.
 */
async function saveLanguageFiles(cache, { downloadMissingOnes }) {
  await Promise.all(
    LANGUAGE_FILES.map(async (file) => {
      if (await cache.match(file)) return;
      const savedByOlderVersion = await caches.match(file);
      if (savedByOlderVersion) await cache.put(file, savedByOlderVersion);
      else if (downloadMissingOnes) await cache.add(file);
    }),
  );
  if (downloadMissingOnes) await cache.put(EVERY_LANGUAGE_SAVED_MARKER, new Response('yes'));
}

// Save every file as soon as this version is installed, then take over from any older version.
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const everyLanguageWasSaved = (await caches.match(EVERY_LANGUAGE_SAVED_MARKER)) !== undefined;
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(FILES_TO_SAVE);
      try {
        await saveLanguageFiles(cache, { downloadMissingOnes: everyLanguageWasSaved });
      } catch (error) {
        console.warn('Some languages could not be saved for offline use.', error);
      }
      await self.skipWaiting();
    })(),
  );
});

// Delete the files saved by older versions.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))))
      .then(() => self.clients.claim()),
  );
});

// The installed app asks for every language to be saved.
self.addEventListener('message', (event) => {
  if (event.data !== 'saveEveryLanguage') return;
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => saveLanguageFiles(cache, { downloadMissingOnes: true })));
});

/** Downloads a language file, and saves it so the language works offline next time. */
async function downloadAndSaveLanguageFile(request) {
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}

// Answer from the saved copy, and only go to the internet for anything not saved.
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((savedResponse) => {
      if (savedResponse) return savedResponse;
      // Opening the page by any other address in the site still shows the app.
      if (request.mode === 'navigate') return caches.match('./').then((savedPage) => savedPage ?? fetch(request));
      if (isLanguageFile(request.url)) return downloadAndSaveLanguageFile(request);
      return fetch(request);
    }),
  );
});
