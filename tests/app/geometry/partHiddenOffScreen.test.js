/**
 * How much of the drawing a phone's on-screen keyboard hides (usePartHiddenOffScreen.js), so the
 * molecule can be shown in the part still in sight while a name is typed.
 */
import { describe, expect, it } from 'vitest';
import { findPartHiddenOffScreen } from '../../../src/hooks/usePartHiddenOffScreen.js';

describe('the part of the drawing hidden off the screen', () => {
  const drawing = { top: 200, bottom: 700 };

  it('is nothing while the whole drawing can be seen', () => {
    expect(findPartHiddenOffScreen(drawing, { top: 0, bottom: 844 })).toEqual({ top: 0, bottom: 0 });
  });

  it('is the bottom part under the keyboard', () => {
    expect(findPartHiddenOffScreen(drawing, { top: 0, bottom: 500 })).toEqual({ top: 0, bottom: 200 });
  });

  it('is the top part too when the page has slid up to keep the text box in sight', () => {
    expect(findPartHiddenOffScreen(drawing, { top: 250, bottom: 600 })).toEqual({ top: 50, bottom: 100 });
  });

  it('is never more than the whole drawing', () => {
    expect(findPartHiddenOffScreen(drawing, { top: 0, bottom: 100 })).toEqual({ top: 0, bottom: 500 });
  });
});
