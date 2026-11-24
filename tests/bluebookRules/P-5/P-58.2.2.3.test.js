/**
 * P-58.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Added indicated hydrogen’ atoms are not cited when the accommodation of a pair of principal
 * characteristic groups or free valences simply removes a double bond (directly or after rearrangement
 * of double bonds) from the parent ring structure.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 619, P-58.2.2.3, example 3. [corrected 19 September 2018]
 *     For napthalene-4a,8a-diyl (preferred prefix)
 *     read naphthalene-4a,8a-diyl (preferred prefix)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202j.gif', pin: 'pyrazine-2,3-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202k.gif', pin: 'anthracene-9,10-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202l.gif', preferredPrefix: 'naphthalene-4a,8a-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202m.gif', pin: 'naphthalene-4a,8a-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202n.gif', pin: '1H-cyclopenta[b]naphthalene-1,5,8-trione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202o.gif', pin: 'anthracene-1,9,10(2H)-trione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202p.gif', preferredPrefix: 'pyrazine-1,4-diyl' },
]);
