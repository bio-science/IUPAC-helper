/**
 * P-15.1.7.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When several nomenclatural features are present in a structure, lowest locants are assigned in
 * accordance with P-14.4. For example, in an unsaturated alcohol having one substituent group, lowest
 * locants are assigned in the order:
 * (a) characteristic group cited as suffix (-ol);
 * (b) unsaturation (‘ene‘ ending, for example);
 * (c) detachable alphabetized prefixes (a methyl group, for instance);.
 * The following examples illustrate the application of this rule”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 61, P-15.1.7.2.3, line 2. [corrected 26 January 2022]
 *     For ...For example, in a cyclic unsaturated alcohol having one substituent group...
 *     read ...For example, in an unsaturated alcohol having one substituent group...
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.2.3', [
  { pin: 'but-3-en-1-ol' },
  { pin: '3-methylbut-1-ene' },
  { pin: '6-methylhept-2-en-4-ol', notNames: ['2-methylhept-5-en-4-ol'] },
]);
