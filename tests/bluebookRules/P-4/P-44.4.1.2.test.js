/**
 * P-44.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior ring, ring system, or principal chain has the greater number of double bonds [criterion
 * (b) in P-44.4.1].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 495, P-44.4.1.2 (1), example left. [corrected 4 September 2024]
 *     For cycloicosene (PIN)
 *     read (E)-cycloicosene (PIN)
 *   Page 495, P-44.4.1.2 (2), example left. [corrected 4 September 2024]
 *     For cycloicosa-1,8-diene (PIN)
 *     read (1E,8E)-cycloicosa-1,8-diene (PIN)
 *   Page 495, P-44.4.1.2 (2), example right. [corrected 4 September 2024]
 *     For (1E)-cycloicos-1-en-3-yne (PIN)
 *     read (1E)-cycloicos-1-en-3-yne (PIN)
 *   Page 496, P-44.4.1.2 example (4), structure 1. [corrected 3 December 2025, modified 22.1.2026]
 *     For 1,2,5,6-tetrasilacyclooct-3-en-7-yne (PIN)
 *     read 1,2,5,6-tetrasilacyclooct-3-en-7-yne
 *     add 3,4-didehydro-1,2,5,6-tetrahydro-1,2,5,6-tetrasilocine (PIN)
 *   Page 496, P-44.4.1.2 example (4), structure 2. [corrected 3 December 2025]
 *     For 1,2,5,6-tetrasilacycloocta-3,7-diyne (PIN)
 *     read 1,2,5,6-tetrasilacycloocta-3,7-diyne
 *     add1,2,5,6-tetrahydro-3,4,7,8-tetradehydro-1,2,5,6-tetrasilocine (PIN)
 *   Page 496, P-44.4.1.2 (5), left structure. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 496, P-44.4.1.2 (5), right structure. [corrected 26 September 2018]
 *     Replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.2', [
  { pin: 'cycloicosyne' },
  { pin: '1,4-dihydronaphthalene' },
  { pin: '1,2,3,4-tetrahydronaphthalene' },
  { pin: '3,4-didehydro-1,2,5,6-tetrahydro-1,2,5,6-tetrasilocine', otherNames: ['1,2,5,6-tetrasilacyclooct-3-en-7-yne'] },
  { pin: '3,4,7,8-tetradehydro-1,2,5,6-tetrahydro-1,2,5,6-tetrasilocine', otherNames: ['1,2,5,6-tetrasilacycloocta-3,7-diyne'] },
  { pin: 'hepta-1,6-diene' },
  { pin: 'hept-1-en-6-yne' },
  { pin: '1,10(1),4,7(1,4)-tetrabenzenadecaphane-2,8-diene' },
  { pin: '1,10(1),4,7(1,4)-tetrabenzenadecaphan-2-en-8-yne' },
]);
