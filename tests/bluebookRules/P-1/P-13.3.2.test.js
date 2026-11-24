/**
 * P-13.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By an additive suffix”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303h.gif', pin: 'pyridine' },
  { pin: 'pyridin-1-ium' },
  { formula: 'CH3-BH2 + H⁻', pin: 'methylborane' },
  { formula: 'CH3-BH3⁻', pin: 'methylboranuide' },
]);
