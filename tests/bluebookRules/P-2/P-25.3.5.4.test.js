/**
 * P-25.3.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names are senior to names of benzoheterocycles.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 255, P-25.3.5.4, example 1 on this page. [corrected 30 January 2019]
 *     For 6H-benzo[b][2]benzopyran
 *     read 6H-benzo[c][2]benzopyran
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250305d.gif', pin: '4H-[1,4]thiazino[2,3-g]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250305e.gif', pin: '10H-furo[3′,2′:4,5]indeno[2,1-b]pyridine', notNames: ['10H-[1]benzofuro[5′,4′:3,4]cyclopenta[1,2-b]pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250305f.gif', pin: '6H-dibenzo[b,d]pyran', otherNames: ['6H-benzo[c]chromene'], notNames: ['6H-benzo[c][1]benzopyran', '6H-benzo[c][2]benzopyran'] },
]);
