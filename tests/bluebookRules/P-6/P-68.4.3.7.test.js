/**
 * P-68.4.3.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfur dimides, HN=E=NH and chalcogen analogues where E = Se, Te
 * Compounds with the general structure, HN=S=NH, belong to a general class having the the class name
 * ‘sulfur diimides’. Preferred IUPAC names are formed substitutively on the basis of the parent
 * hydride λ⁴-sulfane. Functional class names are based on the class name ‘sulfur diimide’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.7', [
  { formula: 'CH3-N=S=N-CH2-CH3', pin: 'ethyl(methyl)-λ⁴-sulfanediimine', otherNames: ['ethylmethylsulfur diimide'] },
]);
