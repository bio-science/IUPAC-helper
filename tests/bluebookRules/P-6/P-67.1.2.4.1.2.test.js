/**
 * P-67.1.2.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Examples of mononuclear noncarbon oxoacids modified by prefixes:”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.4.1.2', [
  { formula: 'Si(OH)3(SH)', name: 'thiosilicic acid' },
  { formula: 'S=N-OH', name: 'thionitrous O-acid' },
  { formula: 'Cl(S)2-OH', name: 'dithiochloric O-acid' },
]);
