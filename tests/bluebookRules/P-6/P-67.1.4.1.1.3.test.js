/**
 * P-67.1.4.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of substituted fundamental acyl groups derived from mononuclear noncarbon oxoacids
 * Names of substituted fundamental acyl groups are formed directly from those of the acids generated
 * by the method described in P-67.1.4.1.1.2. Preferred prefix names of acyl groups are those derived
 * from the preferred IUPAC names of acids. The addition of hydrogen atoms to acyl groups by the method
 * of concatenation, described in P-67.1.4.1.2, is not allowed.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.1.1.3', [
  { formula: 'CH3-P(O)(OH)2', pin: 'methylphosphonic acid' },
  { formula: 'CH3-P(O)<', preferredPrefix: 'methylphosphonoyl' },
  { formula: 'CH3-CH2-SbH(O)OH', pin: 'ethylstibinic acid' },
  { formula: 'CH3-CH2-SbH(O)–', preferredPrefix: 'ethylstibinoyl' },
  { formula: 'C6H5-As(CH3)(O)OH', pin: 'methyl(phenyl)arsinic acid' },
  { formula: 'C6H5-As(CH3)(O)–', preferredPrefix: 'methyl(phenyl)arsinoyl' },
]);
