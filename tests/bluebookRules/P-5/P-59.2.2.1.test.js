/**
 * P-59.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For chains the replacement operation is applied to the hydrocarbon parent hydride to create a new
 * parent hydride with a fixed numbering. Suffixes receive the lowest possible locants in accordance
 * with the resulting numbering.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.2.1', [
  { pin: '3,6,9,12-tetraoxapentadecan-15-oic acid' },
]);
