/**
 * P-61.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names
 * The retained names ‘bromoform’ for HCBr3, ‘chloroform’ for HCCl3, and ‘iodoform’ for HCI3 are
 * acceptable in general nomenclature. Preferred IUPAC names are substitutive names.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.3.4', [
  { formula: 'HCBr3', pin: 'tribromomethane', otherNames: ['bromoform'] },
]);
