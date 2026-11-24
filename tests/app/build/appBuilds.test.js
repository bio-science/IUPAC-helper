/**
 * Builds the whole app, as `npm run build` does, into a temporary folder, and checks
 * that the page and its offline service worker are written.
 */
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { build } from 'vite';
import { afterAll, describe, expect, it } from 'vitest';

const outputFolder = mkdtempSync(join(tmpdir(), 'iupac-helper-build-'));

afterAll(() => rmSync(outputFolder, { recursive: true, force: true }));

describe('the app builds', () => {
  it('writes index.html and the offline service worker', async () => {
    await build({ logLevel: 'silent', build: { outDir: outputFolder, emptyOutDir: true } });
    expect(existsSync(join(outputFolder, 'index.html'))).toBe(true);
    expect(existsSync(join(outputFolder, 'sw.js'))).toBe(true);
  }, 120_000);
});
