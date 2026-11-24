/**
 * P-82.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “STRUCTURES
 * The structure of an isotopically substituted compound is written in the usual way except that
 * appropriate nuclides symbols are used. When different isotopes of the same element are present in
 * the same position, their symbols are written in order of increasing mass number.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.1', [
  { formula: 'CH3-CH²H-OH', notNames: ['CH3-C²HH-OH'] },
]);
