/**
 * P-65.7.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Peroxyanhydrides and chalcogen analogues
 * Peroxyanhydrides, R-CO-OO-CO-R or R-CO-OO-COR′, are named by replacing the term ‘acid’ of an acid or
 * two different acids by the class name ‘peroxyanhydride’.
 * Related anhydrides, in which the junction between two acyl groups is of the type –SS–, –OS–, –SSe–,
 * etc. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.4', [
  { formula: 'CH3-CO-OO-CO-CH3', pin: 'acetic peroxyanhydride' },
  { formula: 'CH3-CO-S-O-CO-CH3', pin: 'acetic thioperoxyanhydride' },
  { formula: 'CH3-CO-S-O-CO-CH2-CH3', pin: 'S-acetic O-propanoic thioperoxyanhydride' },
  { formula: 'CH3-CO-SS-CO-CH3', pin: 'acetic dithioperoxyanhydride' },
]);
