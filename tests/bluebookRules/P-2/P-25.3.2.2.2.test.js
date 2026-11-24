/**
 * P-25.3.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes for attached components derived from the name of a parent component described in
 * P-25.3.2.1.2 and P-25.3.2.1.3 are named by changing the final letter ‘e’ into the letter ‘o’ or by
 * adding the letter ‘o’ when no final letter ‘e’ is present.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302j.gif', preferredPrefix: 'pyrazolo' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302k.gif', preferredPrefix: 'selenopyrano' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302l.gif', preferredPrefix: 'thiepino' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302m.gif', preferredPrefix: 'pentaleno' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302n.gif', preferredPrefix: '1,4,8,11-oxatriazacyclotetradecino' },
]);
