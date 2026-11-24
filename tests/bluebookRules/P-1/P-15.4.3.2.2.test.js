/**
 * P-15.4.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Free valences of substituent groups receive locants according to the fixed numbering of the
 * heterochain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.4.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504l.gif', preferredPrefix: '2,4,6,8-tetrasiladecan-10-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504m.gif', preferredPrefix: '2,4,6,8-tetrasiladecan-5-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504n.gif', preferredPrefix: '2,4,6,8-tetrasilaundecan-11-yl' },
]);
