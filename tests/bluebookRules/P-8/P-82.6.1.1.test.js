/**
 * P-82.6.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In preferred IUPAC names, locants are omitted if no locants are necessary in unmodified names.
 * However, if isotopic modification requires a locant to specify its position, then all locants must
 * be specified and none are omitted.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.6.1.1', [
  { formula: 'CH3-CH2-O²H', pin: 'ethan(²H)ol' },
  { formula: '¹³CH3-CH2-OH', notNames: ['(2-¹³C)ethanol'] },
  { formula: 'CH2²H-O-C²H2-S-CH2-OOH', pin: '{[(²H1)methoxy(²H2)methyl]sulfanyl}methaneperoxol' },
]);
