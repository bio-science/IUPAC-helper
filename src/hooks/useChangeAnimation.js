import { useState } from 'react';

/**
 * Keeps track of an animation that should play each time a value changes (but not when the
 * component first appears).
 *
 * Returns null while there is nothing to play. After a change it returns
 * { id, previousValue }: id goes up by one with every change, so it can be used as a React key
 * to start the animation again from the beginning if the value changes while it is playing.
 * Call endAnimation when the animation has finished.
 */
export function useChangeAnimation(value) {
  const [lastSeenValue, setLastSeenValue] = useState(value);
  const [animation, setAnimation] = useState(null);

  if (value !== lastSeenValue) {
    setLastSeenValue(value);
    setAnimation((playing) => ({ id: (playing?.id ?? 0) + 1, previousValue: lastSeenValue }));
  }

  return { animation, endAnimation: () => setAnimation(null) };
}
