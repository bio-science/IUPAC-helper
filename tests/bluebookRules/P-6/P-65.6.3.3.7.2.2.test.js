/**
 * P-65.6.3.3.7.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group having seniority for citation as suffix, an ester group
 * is indicated by appropriate prefixes in accordance with the type of attachment of the substituent
 * group.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.7.2.2', [
  { formula: 'CH3-S-CS-CO-O-CH2-CS-SH', pin: '{[(methylsulfanyl)(sulfanylidene)acetyl]oxy}ethane(dithoic acid)' },
  { formula: 'NC-S-CH2-CH2-CO-S-CH2-CH3', pin: 'S-ethyl 3-(thiocyanato)propanethioate' },
  { formula: 'HS-CO-O-CS-O-CH2-CH2-COOH', pin: '3-({[(sulfanylcarbonyl)oxy]carbonothioyl}oxy)propanoic acid' },
]);
