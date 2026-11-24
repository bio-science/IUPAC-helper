/**
 * P-62.2.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Aniline, for C6H5-NH2 , is the only name for a primary amine retained as a preferred IUPAC name for
 * which full substitution is permitted on the ring and the nitrogen atom. It is a Type 2a retained
 * name; for the rules of substitution see P-15.1.8.2. Substitution is limited to substituent groups
 * cited as prefixes in accordance with the seniority of functional groups explicitly expressed or
 * implied in the functional parent compound name. The name benzenamine may be used in general
 * nomenclature.
 * The prefix name ‘anilino’ is retained as the preferred prefix for C6H5-NH– with full substitution
 * allowed. The name ‘phenylamino’ may be used in general nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201a.gif', pin: 'N-methylaniline', otherNames: ['N-methylbenzenamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201b.gif', pin: '4-chloroaniline', otherNames: ['4-chlorobenzenamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201c.gif', preferredPrefix: 'anilino' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201d.gif', preferredPrefix: '4-chloroanilino' },
]);
