/**
 * P-67.1.2.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names of halides of the boron acids and silicic acid are substitutive names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 927, P-67.1.2.5.2, example 1. [corrected 30 March 2022]
 *     For bromo(chloro)phenylborane (PIN)
 *     read bromo(chloro)(phenyl)borane (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.5.2', [
  { formula: 'C6H5-B(Cl)(Br)', pin: 'bromo(chloro)(phenyl)borane', otherNames: ['phenylboronic bromide chloride', 'phenylboronobromidic chloride'] },
  { formula: 'CH3-SiCl3', pin: 'trichloro(methyl)silane' },
  { formula: 'SiCl4', preselectedName: 'tetrachlorosilane', otherNames: ['silicon tetrachloride'], notNames: ['silicic tetrachloride'] },
]);
