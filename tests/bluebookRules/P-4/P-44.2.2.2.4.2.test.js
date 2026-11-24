/**
 * P-44.2.2.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system is the bridged ring system with the greater number of ring
 * atoms before bridging [criterion (b) in P-44.2.2.2.4].”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 472, P-44.2.2.2.4.2, example left. [corrected 3 January 2020]
 *     For 1H-3,10a-methanophenanthrene (PIN)
 *     read 1H-3,10a-methanophenanthrene (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.2', [
  { pin: '1H-3,10a-methanophenanthrene' },
  { pin: '1,4a-ethanofluorene' },
]);
