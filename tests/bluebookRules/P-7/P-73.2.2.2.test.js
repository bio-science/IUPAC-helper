/**
 * P-73.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Added indicated hydrogen’ for cations of mancude ring systems
 * A cationic center at a position in a mancude parent hydride where there is an insufficient number of
 * hydrogen atoms to apply directly recommendations for the use of ‘ylium’ as given in P-73.2.2.1.2 is
 * derived formally from a dihydro derivative of the cyclic parent hydride. Such a cation can also be
 * described by applying the principle of ‘added indicated hydrogen’ (see P-14.7). …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1092, P-73.2.2.2, example 2 on this page. [corrected 3 October 2018, modified 10 October
 *   2018]
 *     For (C60-Ih)[5,6]fulleren-1(9H)-ylium (PIN)
 *     read (C60-Ih)[5,6]fulleren-1(9H)-ylium (PIN)
 *     for 1,9-dihydro(C60-Ih)[5,6]fulleren-1-ylium
 *     read 1,9-dihydro(C60-Ih)[5,6]fulleren-1-ylium
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73222a.gif', pin: '3,5-dimethylpyridin-1(4H)-ylium', otherNames: ['3,5-dimethyl-1,4-dihydropyridin-1-ylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73222b.gif', pin: 'naphthalen-4a(8aH)-ylium', otherNames: ['4a,8a-dihydronaphthalen-4a-ylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73222c.gif', name: '1,9-dihydro(C60-Ih)[5,6]fulleren-1-ylium' },
]);
