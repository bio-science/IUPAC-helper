/**
 * P-67.2.5.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acid salts of di- and polynuclear noncarbon oxoacids are named in the same way as neutral salts,
 * the remaining acid hydrogen atom(s) being indicated by the word ‘hydrogen’ (or ‘dihydrogen’, etc.,
 * as appropriate) inserted between the name of the cation and the name of the anion from which it is
 * separated by spaces.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.5.1.2', [
  { formula: 'NaO-SO2-SS-SO2-OH', name: 'sodium hydrogen 2-dithioperoxydisulfate' },
]);
