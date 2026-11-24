/**
 * P-65.3.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names for acyl groups derived from sulfonic and sulfinic acids, and their Se and Te counterparts,
 * by removal of the -OH group from each sulfonic, sulfinic, etc. acid expressed as a suffix are formed
 * by changing the ‘ic acid’ ending of the suffix to ‘yl’. When the suffix is modified by functional
 * replacement nomenclature, the ending of the corresponding acyl group is ‘oyl’. Acyl groups formed by
 * concatenation, for example, phenylsulfonyl, may be used in general nomenclature.
 * The formation of simple substitutive preferred acyl prefixes directly from the name of the sulfonic
 * acid, sulfinic acid, etc., as in ‘benzenesulfonyl’, instead of the traditional method of …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.2.2.2', [
  { formula: 'C6H5-SO2–', preferredPrefix: 'benzenesulfonyl' },
  { formula: 'CH3-Se(O)–', preferredPrefix: 'methaneseleninyl' },
  { formula: 'CH3-CH2-S(O)(S)–', preferredPrefix: 'ethanesulfonothioyl' },
  { formula: 'C6H5-S(Se)–', preferredPrefix: 'benzenesulfinoselenoyl' },
  { formula: 'CH3-CH2-S(=NH)–', preferredPrefix: 'ethanesulfinimidoyl' },
]);
