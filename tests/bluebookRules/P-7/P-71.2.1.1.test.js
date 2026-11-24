/**
 * P-71.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A radical formally derived by the removal of one hydrogen atom from a mononuclear parent hydride of
 * an element of Group 14, from a terminal atom of an unbranched acyclic hydrocarbon, or from any
 * position of a monocyclic saturated hydrocarbon ring is named by replacing the ‘ane’ ending of the
 * systematic name of the parent hydride by ‘yl’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.1.1', [
  { formula: '•CH3', pin: 'methyl' },
  { formula: '•CH2-CH2-CH3', pin: 'propyl' },
  { formula: '•GeH3', preselectedName: 'germyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71211a.gif', pin: 'cyclobutyl' },
]);
