/**
 * P-16.5.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In determining the nesting order in a name the parentheses used to indicate compound locants, phane
 * amplification locants, stereochemistry, specific isotopic substitution, or coordination with
 * multicenter bonding are taken into consideration.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.4.1.3', [
  { pin: '2-[bicyclo[6.6.1]pentadeca-8(15)-en-1-yl]ethan-1-ol' },
  { pin: '10-{[(3S)-1-phosphabicyclo[2.2.2]octan-3-yl]methyl}-10H-phenoxazine' },
  { pin: '1,2-di[(¹³C)methyl]benzene' },
  { pin: '3-[ethyl(2-³⁴S)trisulfanyl]propanoic acid' },
]);
