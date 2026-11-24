/**
 * P-44.2.2.2.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior fused ring system has the lower letter(s) alphabetically in the fusion descriptor when
 * compared as a set; letters omitted in names are considered in the application of this criterion
 * [criterion (c) in P-44.2.2.2.3].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.3.3', [
  { pin: '5H-[1,3]dioxolo[4,5-c][1,2]oxaphosphole' },
  { pin: '5H-[1,3]dioxolo[4,5-d][1,2]oxaphosphole' },
]);
