import { useEffect, useState } from 'react';

const NOTHING_HIDDEN = { top: 0, bottom: 0 };

/**
 * How many pixels of a box are off the top and bottom of the part of the page that can be seen,
 * { top, bottom }. Both boxes are { top, bottom } in the same pixels, such as from getBoundingClientRect.
 */
export function findPartHiddenOffScreen(box, visibleBox) {
  const height = box.bottom - box.top;
  return {
    top: Math.min(height, Math.max(0, visibleBox.top - box.top)),
    bottom: Math.min(height, Math.max(0, box.bottom - visibleBox.bottom)),
  };
}

/**
 * How much of an element is hidden off the top and bottom of the screen by a phone's on-screen
 * keyboard, { top, bottom } in pixels, kept up to date as the keyboard opens and closes.
 *
 * The keyboard doesn't make the page smaller: it covers its lower part, and the browser may slide
 * the page up a little to keep the text box in sight. Only the part of the page that can still be
 * seen (window.visualViewport) shrinks. When the student has zoomed in by pinching, nothing is
 * counted as hidden, so the drawing isn't fitted to the zoomed-in part instead of being made bigger.
 *
 * elementReference is a ref to the element; changeCount should change whenever the element may
 * have changed size, so it is measured again.
 */
export function usePartHiddenOffScreen(elementReference, changeCount) {
  const [hidden, setHidden] = useState(NOTHING_HIDDEN);

  useEffect(() => {
    const visualViewport = typeof window === 'undefined' ? undefined : window.visualViewport;
    if (!visualViewport) return undefined;

    function measure() {
      const element = elementReference.current;
      const isZoomedIn = Math.abs(visualViewport.scale - 1) > 0.01;
      const newHidden =
        element && !isZoomedIn
          ? findPartHiddenOffScreen(element.getBoundingClientRect(), {
              top: visualViewport.offsetTop,
              bottom: visualViewport.offsetTop + visualViewport.height,
            })
          : NOTHING_HIDDEN;
      setHidden((oldHidden) => (oldHidden.top === newHidden.top && oldHidden.bottom === newHidden.bottom ? oldHidden : newHidden));
    }

    measure();
    visualViewport.addEventListener('resize', measure);
    visualViewport.addEventListener('scroll', measure);
    return () => {
      visualViewport.removeEventListener('resize', measure);
      visualViewport.removeEventListener('scroll', measure);
    };
  }, [elementReference, changeCount]);

  return hidden;
}
