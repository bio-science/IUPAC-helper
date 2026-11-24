/**
 * P-15.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The symbol λn is used to describe heteroatoms having nonstandard bonding numbers (P-14.1.3). In
 * names, it is placed immediately after the locant (without an intervening hyphen) denoting the
 * heteroatom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.4.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504a.gif', pin: '6λ⁵-phosphaspiro[4.5]decane' },
]);
