/**
 * P-67.2.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anhydrides of polynuclear non-carbon oxoacids
 * Neutral anhydrides formed between organic acids and polynuclear noncarbon oxoacids having
 * preselected names are named by citing, in alphabetical order, the names of the acids followed by the
 * name of the class ‘anhydride’; multiplying prefixes ‘di’, ‘tri’, etc. are used to indicate the
 * multiplicity of the anhydride linkages.
 * Acidic anhydrides are named by using the senior acid as parent or by using systematic substitutive
 * nomenclature as described in P-67.3.1.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.5.3', [
  { formula: '(CH3-CO-O)2P(O)-P(O)(O-CO-CH3)2', pin: 'tetraacetic hypodiphosphoric tetraanhydride' },
  { formula: 'CH3-CO-O-SO-SO-O-CO-CH2-CH3', pin: 'acetic dithionous propanoic dianhydride', otherNames: ['acetic hypodisulfurous propanoic dianhydride'] },
]);
