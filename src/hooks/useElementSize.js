import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * The width and height of an element on the screen, in pixels, kept up to date as it changes
 * size. Pass the returned ref as the element's ref. { width: 0, height: 0 } while there is no element.
 */
export function useElementSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const observerReference = useRef(null);

  const ref = useCallback((element) => {
    observerReference.current?.disconnect();
    observerReference.current = null;
    if (element === null) {
      setSize({ width: 0, height: 0 });
      return;
    }
    const measure = () => {
      const { width, height } = element.getBoundingClientRect();
      setSize((oldSize) => (oldSize.width === width && oldSize.height === height ? oldSize : { width, height }));
    };
    measure();
    if (typeof ResizeObserver !== 'undefined') {
      observerReference.current = new ResizeObserver(measure);
      observerReference.current.observe(element);
    }
  }, []);

  useEffect(() => () => observerReference.current?.disconnect(), []);

  return [ref, size];
}
