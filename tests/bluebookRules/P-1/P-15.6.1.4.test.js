/**
 * P-15.6.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a cyclic component carries at least two identical side chains, multiplicative prefixes ‘di’,
 * ‘tri’, etc., are used to indicate their number; these prefixes are placed before the name of the
 * side chain and superscript arabic numbers are used for all locants on the side chain instead of
 * primes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 100, P-15.6.1.4, example 3. [corrected 25 August 2016]
 *     For pyridine-2,3-bis(decanoic acid)
 *     read pyridine-2,3-di(decanoic acid)
 *     for 10,10′-(pyridine-2,3-diyl)bis(decanoic acid) (PIN)
 *     read 10,10′-(pyridine-2,3-diyl)di(decanoic acid) (PIN)
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506i.gif', pin: '2,2′-(naphthalene-2,3-diyl)diacetic acid', otherNames: ['naphthalene-2,3-diacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506j.gif', pin: '2,2′,2′′-(benzene-1,3,5-triyl)triacetic acid', otherNames: ['benzene-1,3,5-triacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506k.gif', pin: '10,10′-(pyridine-2,3-diyl)di(decanoic acid)', otherNames: ['pyridine-2,3-di(decanoic acid)'] },
]);
