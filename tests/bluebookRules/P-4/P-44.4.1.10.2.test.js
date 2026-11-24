/**
 * P-44.4.1.10.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For ‘hydro/dehydro’ prefixes, lower locants are assigned as described in P-31.2.
 * Criteria for choosing a preferred IUPAC name based on a senior parent structure as described in P-44
 * are found in P-45.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.10.2', [
  { pin: '1,2-dihydronaphthalene' },
  { pin: '1,4-dihydronaphthalene' },
  { pin: '1¹,1²-dihydro-1(2)-quinolina-3,5(1,4),7(1)-tribenzenaheptaphane' },
  { pin: '1¹,1⁴-dihydro-1(2)-quinolina-3,5(1,4),7(1)-tribenzenaheptaphane' },
  { pin: '1,2-dihydrophosphinine' },
  { pin: '1,4-dihydrophosphinine' },
  { pin: '1,2,3,4-tetrahydrophosphinine' },
  { pin: '2,3,4,5-tetrahydrophosphinine' },
  { pin: '2,3-didehydropyridine' },
  { pin: '3,4-didehydropyridine' },
]);
