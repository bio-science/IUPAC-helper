/**
 * P-13.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In specific instances, a heteroatom may be replaced by a carbon atom or by another heteroatom. The
 * former is illustrated in the nomenclature of cyclic polyboranes (see IR-6.2.4.4, ref. 12) and both
 * are found in natural products (see RF-5, ref. 9 and P-101.4) and must be applied only when
 * specifically prescribed because the nomenclature of organic compounds is normally based on carbon
 * atoms.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 11, P-13.2.1.2, example 2. [corrected 30 January 2019]
 *     For 4βH-4-carbayohimban
 *     read (4βH)-4-carbayohimban
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302e.gif', pin: '1-carba-nido-pentaborane(5)' },
]);
