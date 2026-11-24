/**
 * P-65.6.3.3.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyester names formed by using functional class nomenclature and skeletal replacement (‘a’)
 * nomenclature:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 815, P-65.6.3.3.4.3, example 2. [corrected 28 October 2016]
 *     For dimethyl ethane-1,2-diylbis(carbonyloxyethyl) dibutanedioate)
 *     read dimethyl ethane-1,2-diylbis(carbonyloxyethane-2,1-diyl) dibutanedioate
 *   Page 815, P-65.6.3.3.4.3, example 3. [corrected 28 October 2016]
 *     For dimethyl 6,8-dioxo-2,5,9,12-tetraoxatridecane-1,13-diyl dipropanedioate (PIN)
 *     read dimethyl 6,8-dioxo-2,5,9,12-tetraoxatridecane-1,13-diyl dipropanedioate
 *     For dimethyl propanedioylbis(oxyethane-2,1-diyloxymethylene dipropanedioate)
 *     read dimethyl propanedioylbis(oxyethane-2,1-diyloxymethylene) dipropanedioate
 *     add dimethyl 3,10,12,19-tetraoxo-4,6,9,13,16,18-hexaoxahenicosane-1,21-dioate (PIN)
 *     replace the structure with:
 *   Page 815, P-65.6.3.3.4.3, example 4. [corrected 28 October 2016]
 *     For 2-({[(methoxycarbonyl)acetyl]oxy}ethyl) 3,5,9,11-tetraoxo-2,6,8,12-tetraoxatridecan-1-yl
 *     butanedioate (PIN)
 *     read 2-{[(methoxycarbonyl)acetyl]oxy}ethyl 3,5,9,11-tetraoxo-2,6,8,12-tetraoxatridecan-1-yl
 *     butanedioate
 *     add dimethyl 3,7,9,13,16,21-hexaoxo-4,6,10,12,17,20-hexaoxatricosane-1,23-dioate (PIN)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603at.gif', pin: 'dimethyl 3,8,10,15-tetraoxo-4,7,11,14-tetraoxaheptadecane-1,17-dioate', otherNames: ['dimethyl methylenebis(carbonyloxyethane-2,1-diyl) dipropanedioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603au.gif', pin: 'dimethyl 4,9,12,17-tetraoxo-5,8,13,16-tetraoxaicosane-1,20-dioate', otherNames: ['dimethyl ethane-1,2-diylbis(carbonyloxyethane-2,1-diyl) dibutanedioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603av.gif', pin: 'dimethyl 3,10,12,19-tetraoxo-4,6,9,13,16,18-hexaoxahenicosane-1,21-dioate', otherNames: ['dimethyl 6,8-dioxo-2,5,9,12-tetraoxatridecane-1,13-diyl dipropanedioate', 'dimethyl propanedioylbis(oxyethane-2,1-diyloxymethylene) dipropanedioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603aw.gif', pin: 'dimethyl 3,7,9,13,16,21-hexaoxo-4,6,10,12,17,20-hexaoxatricosane-1,23-dioate', otherNames: ['2-{[(methoxycarbonyl)acetyl]oxy}ethyl 3,5,9,11-tetraoxo-2,6,8,12-tetraoxatridecan-1-yl butanedioate'] },
]);
