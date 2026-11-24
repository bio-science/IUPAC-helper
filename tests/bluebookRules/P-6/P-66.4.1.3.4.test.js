/**
 * P-66.4.1.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent prefixes corresponding to the suffixes sulfonimidamide, sulfinimidamide, and related
 * selenium and tellurium suffixes are formed systematically by concatenation using the prefix ‘amino-’
 * and the name of the appropriate acyl group:
 * Note: The italic letter locant ‘S’ is used to avoid potential ambiguity regarding substitution on
 * the imido nitrogen atom”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.3.4', [
  { formula: '–S(O)(=NH)-NH2', preselectedPrefix: 'S-aminosulfonimidoyl' },
  { formula: '–S(=NH)2-NH2', preselectedPrefix: 'S-aminosulfonodiimidoyl' },
  { formula: '–S(=NH)-NH2', preselectedPrefix: 'S-aminosulfinimidoyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66413e.gif', pin: '3-(S-aminosulfinimidoyl)propanoic acid' },
]);
