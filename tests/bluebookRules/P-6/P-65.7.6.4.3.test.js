/**
 * P-65.7.6.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the chalcogen atom replaces an oxygen atom in a carbonyl group, i.e. >C=S, thiocarboxylic
 * acids and thioacyl groups are used in the manner described for anhydrides and polyanhydrides.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.6.4.3', [
  { formula: 'CH3-CS-O-CO-CH2-CH2-CO-O-CO-CH3', pin: 'acetic butanedioic ethanethioic dianhydride' },
  { formula: 'CH3-CO-O-CS-CH2-CH2-CS-O-CO-CH3', pin: 'diacetic butanebis(thioic) dianhydride' },
  { formula: 'CH3-CO-O-CS-CH2-CH2-CS-S-CS-CH3', pin: 'acetic 4-[(ethanethioyl)sulfanyl]-4-sulfanylidenebutanethioic anhydride' },
  { formula: 'CH3-CO-O-CO-CH2-CH2-CO-O-CO-CH2-CH2-CO-S-CO-CH2-CH3', pin: 'acetic butanedioic 4-oxo-4-(propanoylsulfanyl)butanoic dianhydride' },
]);
