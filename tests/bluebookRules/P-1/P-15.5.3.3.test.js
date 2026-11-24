/**
 * P-15.5.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Replacement in characteristic groups expressed as prefixes in substitutive nomenclature
 * Functional replacement is used to modify prefixes containing oxygen atoms by the prefixes ‘thio’,
 * ‘seleno’, and ‘telluro’. Prefixes are described in appropriate sections of Chapter P-6 and listed in
 * Appendix 2.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.5.3.3', [
  { formula: '–C{O/S}H', preferredPrefix: 'thiocarboxy' },
  { formula: '=S', preselectedPrefix: 'sulfanylidene' },
]);
