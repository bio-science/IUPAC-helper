/**
 * P-68.4.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfonediimines, RE(=NH)2R′, and chalcogen analogues where E = S, Se, or Te.
 * Compounds with the general structures, RE(=NH)2R′, have the class name ‘sulfonediimines’. Preferred
 * IUPAC names are formed substitutively on the basis of the parent hydride λ⁶-sulfane. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.5', [
  { formula: '(C6H5)2S(=NH)2', pin: 'diphenyl-λ⁶-sulfanediimine', notNames: ['diphenyl sulfonediimine'] },
]);
