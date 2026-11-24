/**
 * P-67.1.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from esters of nitric acid and nitrous acid
 * Nitrates and nitrites as esters of nitric acid and nitrous acid are discussed in P-67.1.3.2.
 * Substituent groups derived from these compounds are named by concatenation by adding the acyl groups
 * ‘nitro’ for –NO2 and ‘nitroso’ for –NO to the prefix ‘oxy’ or by substituting these acyl groups into
 * substituent groups such as ‘sulfanyl’ , ‘selanyl’, or ‘tellanyl’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.3.1', [
  { formula: '–O-NO2', preselectedPrefix: 'nitrooxy' },
  { formula: '–S-NO2', preselectedPrefix: 'nitrosulfanyl' },
  { formula: '–O-NO', name: 'nitrosooxy (preselected prefix' },
  { formula: '–Se-NO', preselectedPrefix: 'nitrososelanyl' },
]);
