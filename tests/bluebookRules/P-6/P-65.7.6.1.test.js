/**
 * P-65.7.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Dianhydrides are named by citing the acid groups in their order of occurrence in the structure
 * beginning with the end acid group lower in alphabetical order followed by the class term
 * ‘dianhydride’. The numerical prefix ‘di-’ is used to generate preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.6.1', [
  { formula: 'HO−B(O-CO-CH3)2', pin: 'bis(acetyloxy)borinic acid', otherNames: ['acetic boric dianhydride'] },
  { formula: 'CH3-CO-O-CO-CH2-CH2-CO-O-CO-CH3', pin: 'diacetic butanedioic dianhydride' },
  { formula: 'CH3-CO-O-SO2-CH2-SO2-O-CO-CH2-CH3', pin: 'acetic methanedisulfonic propanoic dianhydride' },
  { formula: 'CH3-CH2-CO-O-CO-CH2-CH2-CO-O-CO-CH2-CH2-CH3', pin: 'butanoic butanedioic propanoic dianhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706a.gif', pin: 'diacetic 2-methylbutanedioic dianhydride' },
]);
