/**
 * P-65.7.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anhydrides of substituted monocarboxylic or monosulfonic acids, if symmetrically substituted, are
 * named by prefixing ‘bis’ to the name of the acid and replacing the term ‘acid’ by ‘anhydride’. The
 * prefix ‘bis’ may be omitted in general nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.8.1', [
  { formula: '(Cl-CH2-CH2-SO)2O', pin: 'bis(2-chloroethane-1-sulfinic) anhydride' },
  { formula: '(Cl-CH2-CO)2O', pin: 'bis(chloroacetic) anhydride' },
  { formula: '(H2N-[CH2]5-CO)2O', pin: 'bis(6-aminohexanoic) anhydride' },
]);
