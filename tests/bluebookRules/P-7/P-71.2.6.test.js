/**
 * P-71.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Added indicated hydrogen’ for radicals of mancude ring systems
 * A radical center at a position in a mancude parent hydride where there is an insufficient number of
 * hydrogen atoms to apply directly the recommendations for the use of ‘yl’ or ‘ylidene’ given in
 * P-71.2.1 and P-71.2.2 is derived formally from a dihydro derivative of the cyclic parent hydride.
 * Such a radical can also be described by applying the principle of ‘added indicated hydrogen’ (see
 * P-14.7 and P-58.2). …
 * Names formed by the ‘added indicated hydrogen’ method are preferred to names using ‘hydro’ prefixes
 * (see P-58.2.5).”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1057, P-71.2.6, example 4. [corrected 3 October 2018]
 *     For (C60-Ih)[5,6]fulleren-1(9H)-yl (PIN)
 *     read (C60-Ih)[5,6]fulleren-1(9H)-yl (PIN)
 *     for 1,9-dihydro(C60-Ih)[5,6]fulleren-1-yl
 *     read 1,9-dihydro(C60-Ih)[5,6]fulleren-1-yl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.6', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71260a.gif', pin: '1,3-thiazol-3(2H)-yl', otherNames: ['2,3-dihydro-1,3-thiazol-3-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71260b.gif', pin: 'naphthalen-3-yl-1(2H)-ylidene', otherNames: ['1,2-dihydronaphthalen-3-yl-1-ylidene'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71260c.gif', pin: 'naphthalen-4a(8aH)-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71260c.gif', pin: 'naphthalene-4a,8a-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71260d.gif', name: '1,9-dihydro(C60-Ih)[5,6]fulleren-1-yl' },
]);
