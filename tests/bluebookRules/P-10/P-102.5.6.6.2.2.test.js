/**
 * P-102.5.6.6.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lactones and lactams are named by adapting Rules P-65.6.3.5.1 and P-66.1.5, respectively. Two
 * locants are used before the lactone or lactam term: the first one is the locant 1 denoting the
 * carboxy group position; the second locant denotes the position of attachment on the carbon chain. To
 * name lactams, the amino group, –NH2, must be generated and cited. The use of Greek letters to
 * indicate the size of a lactone or lactam ring is not recommended. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566h.gif', name: 'D-glucono-1,4-lactone' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566i.gif', name: 'D-glucono-1,5-lactone' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566j.gif', name: '5-amino-5-deoxy-D-galactono-1,5-lactam' },
]);
