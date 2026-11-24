/**
 * P-22.2.2.1.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The stems ‘iridine’, ‘etidine’, and ‘olidine’ are used when nitrogen atoms are present in the ring;
 * otherwise the ‘ane’ stems are used.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202p.gif', pin: 'oxetane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202q.gif', pin: 'azetidine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202r.gif', pin: '1,2-oxaphospholane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202s.gif', pin: '1,2,3-oxathiazolidine' },
]);
