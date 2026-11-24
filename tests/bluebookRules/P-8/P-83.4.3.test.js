/**
 * P-83.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names
 * The name of an isotopically deficient compound is formed by adding the italicized symbol def
 * immediately preceding, and without a hyphen, the appropriate nuclide symbol, both enclosed in
 * brackets and cited before the name or the part of the name that is isotopically modified.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-83.4.3', [
  { pin: 'trichloro[def¹³C]methane' },
]);
