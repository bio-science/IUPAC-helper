import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeOfflineServiceWorker } from './buildPlugins/writeOfflineServiceWorker.js';
import { languageFiles } from './buildPlugins/languageFiles.js';

/**
 * Browsers refuse to run module scripts (and "crossorigin" files) opened straight from
 * disk. The app is built as one ordinary script instead, so dist/index.html works when
 * double-clicked, with no server, as well as on GitHub Pages.
 */
function makeBuiltPageOpenableFromDisk() {
  return {
    name: 'make-built-page-openable-from-disk',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(/ type="module"/g, ' defer').replace(/ crossorigin/g, '');
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), languageFiles(), makeBuiltPageOpenableFromDisk(), writeOfflineServiceWorker()],
  // Relative asset paths, so the built site works from any folder,
  // including a GitHub Pages sub-folder or straight from disk.
  base: './',
  build: {
    modulePreload: false,
    rollupOptions: {
      output: { format: 'iife' },
    },
  },
  test: {
    pool: 'threads',
    projects: [
      // The app's own tests: run by `npm test` and by CI.
      { extends: true, test: { name: 'app', include: ['tests/app/**/*.test.js'] } },
      // The Blue Book rule checks: a map of what the app supports, run by `npm run rules`.
      // They never stop the tests, the build or a deploy.
      { extends: true, test: { name: 'bluebook-rules', include: ['tests/bluebookRules/**/*.test.js'], isolate: false } },
    ],
  },
});
