import { useCallback, useSyncExternalStore } from 'react';

/** True if the screen matches the media query now (false where there is no window, as in tests). */
export function matchesMediaQuery(query) {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(query).matches;
}

/** Whether the screen matches the media query, kept up to date as the window is resized or the phone turned. */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return () => {};
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', onChange);
      return () => mediaQueryList.removeEventListener('change', onChange);
    },
    [query],
  );
  return useSyncExternalStore(subscribe, () => matchesMediaQuery(query), () => false);
}
