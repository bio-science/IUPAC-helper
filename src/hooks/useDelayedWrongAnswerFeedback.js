import { useEffect, useState } from 'react';

/** How long to wait after the last keystroke before showing the red cross. */
export const DELAY_BEFORE_SHOWING_WRONG_ANSWER_IN_MILLISECONDS = 2000;

/**
 * Returns true once the answer has been wrong, without changing, for the full delay.
 *
 * A student is usually part-way through typing a name, so it would be discouraging to
 * flash a red cross at every keystroke. Every change to the answer restarts the wait.
 * (A correct answer is shown straight away; that is handled by the component.)
 */
export function useDelayedWrongAnswerFeedback(answerIsWrong, answerText, delayInMilliseconds = DELAY_BEFORE_SHOWING_WRONG_ANSWER_IN_MILLISECONDS) {
  const [wrongAnswerFeedbackIsVisible, setWrongAnswerFeedbackIsVisible] = useState(false);

  useEffect(() => {
    setWrongAnswerFeedbackIsVisible(false);
    if (!answerIsWrong) return undefined;

    const timerId = setTimeout(() => setWrongAnswerFeedbackIsVisible(true), delayInMilliseconds);
    return () => clearTimeout(timerId);
  }, [answerIsWrong, answerText, delayInMilliseconds]);

  return wrongAnswerFeedbackIsVisible;
}
