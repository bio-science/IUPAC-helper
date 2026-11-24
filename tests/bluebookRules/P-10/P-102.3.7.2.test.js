/**
 * P-102.3.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mixtures of anomers
 * When a mixture of anomers has to be described, the stereodescriptors ‘α’ and ‘β’ are placed at the
 * front of the name, separated by a comma; in Haworth representations, the symbols H and OH replace
 * the formal bonds at the anomeric carbon atom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.3.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102372a.gif', name: 'α,β-D-glucopyranose' },
]);
