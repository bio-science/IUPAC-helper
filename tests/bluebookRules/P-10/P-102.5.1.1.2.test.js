/**
 * P-102.5.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Aldoses composed of more than four chirality centers are named by adding two or more
 * configurational prefixes (listed in Table 10.2) to the stem name. Prefixes are assigned in order to
 * the chirality centers in groups of four, beginning with the group located next to the aldehydic
 * group. The prefix relating to the group of carbon atoms farthest from the aldehydic group (which may
 * contain fewer than four chirality centers) is cited first.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102511b.gif', name: 'D-glycero-D-gluco-heptose', notNames: ['D-gluco-D-glycero-heptose'] },
]);
