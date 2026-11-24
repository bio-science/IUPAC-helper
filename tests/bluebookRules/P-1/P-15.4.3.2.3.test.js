/**
 * P-15.4.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Characteristic groups cited as suffixes are given locants in accordance with the fixed numbering of
 * the heterochain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.4.3.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504o.gif', pin: '2,4,6,8-tetrasilanonan-1-oic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504p.gif', pin: '2,4,6,8-tetrasiladecan-10-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504q.gif', pin: '2,4,6,8-tetrasiladecan-10-oic acid' },
]);
