/**
 * P-35.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of compound prefixes derived from suffixes or functional parent compounds may be formed by
 * substituting simple prefixes into other simple prefixes. When there is a choice, P-57.4 provides for
 * the selection of a preferred compound prefix.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-35.3.1', [
  { preselectedPrefix: 'selanylsulfanyl' },
  { preselectedPrefix: 'chloroamino' },
  { preferredPrefix: 'methylamino' },
  { preselectedPrefix: 'chlorophosphanyl' },
]);
