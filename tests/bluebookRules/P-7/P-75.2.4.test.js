/**
 * P-75.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Added indicated hydrogen’
 * Radical and ionic centers at positions in a mancude parent hydride where there is an insufficient
 * number of hydrogen atoms to directly apply recommendations for the use of ‘yl’, ‘ylidene’, ‘ide’ or
 * ‘ylium’ as given in P-71.1, P-72.1 and P-73.2, respectively are derived formally from a dihydro
 * derivative of the cyclic parent hydride. Radical ions can also be described by applying the
 * principle of ‘added indicated hydrogen’ (see P-14.7 and P-58.2.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1125, P-75.2.4, example 1 on this page. [corrected 10 October 2018]
 *     Replace the structure with:
 *   Page 1125, P-75.2.4, example 3 (X = • ; Y = +) on this page. [corrected 3 October 2018]
 *     For (C60-Ih)[5,6]fulleren-9-ylium-1(9H)-yl (PIN)
 *     read (C60-Ih)[5,6]fulleren-9-ylium-1(9H)-yl (PIN)
 *     for 1,9-dihydro(C60-Ih)[5,6]fulleren-1,9-diyl
 *     read 1,9-dihydro(C60-Ih)[5,6]fulleren-9-ylium-1-yl
 *   Page 1125, P-75.2.4, example 3 (X = • ; Y = –) on this page. [corrected 3 October 2018]
 *     For (C60-Ih)[5,6]fulleren-9-id-1(9H)-yl (PIN)
 *     read (C60-Ih)[5,6]fulleren-9-id-1(9H)-yl (PIN)
 *     for 1,9-dihydro(C60-Ih)[5,6]fulleren-9-id-1-yl
 *     read 1,9-dihydro(C60-Ih)[5,6]fulleren-9-id-1-yl
 *   Page 1125, P-75.2.4, example 3 on this page. [corrected 10 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75240a.gif', pin: '9,10-dihydroanthracen-10-id-9-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75240b.gif', name: '1,4-dihydronaphthalen-4-id-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75240c.gif', pin: '9,10-dihydrophenanthren-10-ylium-9-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75240d.gif', pin: '1-ethyl-2-oxopyridin-1-ium-1(2H)-yl', otherNames: ['1-ethyl-2-oxo-1,2-dihydropyridin-1-ium-1-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75240e.gif', pin: 'C60-Ih)[5,6]fulleren-9-id-1(9H)-yl', otherNames: ['1,9-dihydro(C60-Ih)[5,6]fulleren-9-ylium-1-yl', '1,9-dihydro(C60-Ih)[5,6]fulleren-9-id-1-yl'] },
]);
