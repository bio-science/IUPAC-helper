/**
 * P-66.5.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitriles derived from retained acid names given in P-65.1.1.2.2 are only used in general
 * nomenclature; no substitution is allowed. Preferred IUPAC names are systematic names (see
 * P-66.5.1.1).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.2.3', [
  { formula: 'CH3-CH2-CN', pin: 'propanenitrile', otherNames: ['propiononitrile'] },
  { formula: 'NC-CH2-CH2-CN', pin: 'butanedinitrile', otherNames: ['succinonitrile'] },
]);
