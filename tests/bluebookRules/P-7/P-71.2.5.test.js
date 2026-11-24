/**
 * P-71.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The λ-convention
 * Divalent and trivalent radical centers in a parent hydride formally derived by the removal of two or
 * three hydrogen atoms from the same skeletal atom in its standard valence state may be described by
 * the λ-convention (see P-14.1). Locants for the radical centers are followed by the symbol λn, where
 * ‘n’ is the bonding number of the skeletal atom (see P-14.1). This method is only for general
 * nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.5', [
  { formula: 'Cl2C²•', pin: 'dichloromethylidene', otherNames: ['dichloro-λ²-methane', 'dichloromethanediyl'] },
  { formula: 'FC³•', pin: 'fluoromethylidyne', otherNames: ['fluoro-λ¹-methane', 'fluoromethanetriyl'] },
  { formula: 'C6H5-N²•', pin: 'benzenaminylidene', otherNames: ['phenyl-λ¹-azane', 'phenylazanediyl'] },
]);
