/**
 * Formulae are often written with their numbers as subscripts: C₂H₆O. Unicode has a subscript
 * form of each digit, ₀ to ₉, so a formula copied from a web page or document may come with
 * those in place of ordinary digits. These change between the two.
 */

const SUBSCRIPT_DIGITS = '₀₁₂₃₄₅₆₇₈₉';

/** "C₂H₆O" -> "C2H6O". Any other characters are left as they are. */
export function writeSubscriptDigitsAsOrdinaryDigits(text) {
  return text.replace(/[₀-₉]/g, (subscriptDigit) => String(SUBSCRIPT_DIGITS.indexOf(subscriptDigit)));
}

/** "C2H6O" -> "C₂H₆O": every digit in the text, so give it only the numbers to be written as subscripts. */
export function writeDigitsAsSubscripts(text) {
  return text.replace(/\d/g, (digit) => SUBSCRIPT_DIGITS[Number(digit)]);
}
