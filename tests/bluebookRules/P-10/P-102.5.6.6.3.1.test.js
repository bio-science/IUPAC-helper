/**
 * P-102.5.6.6.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of individual ketoaldonic acids are formed by changing the ending ‘ulose’ in the name of the
 * corresponding ketose to ‘ulosonic acid’, preceded by the locant of the ketonic group. The numbering
 * starts at the carboxy group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566k.gif', name: '2,3,4,6-tetra-O-acetyl-D-arabino-hex-5-ulosonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566l.gif', name: '3-deoxy-α-D-manno-oct-2-ulopyranosonic acid' },
]);
