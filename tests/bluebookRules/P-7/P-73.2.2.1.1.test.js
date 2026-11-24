/**
 * P-73.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specific method
 * Cations formed formally by the removal of a hydride ion, H⁻, from a terminal atom of a saturated
 * unbranched acyclic hydrocarbon, a saturated monocyclic hydrocarbon, or a mononuclear parent hydride
 * belonging to Group 14, i.e., methane, CH4, silane, SiH4, germane, GeH4, stannane, SnH4, and
 * plumbane, PbH4, are named by replacing the ‘ane’ ending in the name of the parent hydride by the
 * suffix ‘ylium’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.2.1.1', [
  { formula: '⁺CH3', pin: 'methylium' },
  { formula: '(C6H5)3Si⁺', pin: 'triphenylsilylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221a.gif', pin: 'propylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221b.gif', pin: 'cyclobutylium' },
]);
