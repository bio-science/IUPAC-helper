/**
 * P-44.4.1.10.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For the endings ‘ene’ and ‘yne’ lower locants are assigned first to the endings as a set without
 * regard to type and then to ‘ene’ endings.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.4.1.10.1', [
  { pin: 'undeca-2,4-dien-7-yne' },
  { pin: 'undeca-2,4-dien-8-yne' },
  { pin: 'hexa-1,4-diene' },
  { pin: 'hexa-1,5-diene' },
  { pin: 'undeca-2,4,7-trien-9-yne-1,11-diol' },
  { pin: 'undeca-2,4,9-trien-7-yne-1,11-diol' },
  { pin: '3,6,10,13-tetrathiahexadec-14-ene' },
  { pin: '3,6,10,13-tetrathiahexadec-15-ene' },
  { pin: '1,13(1),3,6,10(1,4)-pentabenzenatridecaphane-4-en-8-yne' },
  { pin: '1,13(1),3,6,10(1,4)-pentabenzenatridecaphan-4-en-11-yne' },
  { pin: '1,13(1),3(1,2),6,10(1,4)-pentabenzenatridecaphan-4,8-dien-11-yne' },
  { pin: '1,13(1),3(1,2),6,10(1,4)-pentabenzenatridecaphane-4,11-dien-8-yne' },
]);
