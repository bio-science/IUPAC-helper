/**
 * P-65.6.3.3.7.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of acids modified by functional replacement are used to generate preferred IUPAC names of
 * corresponding esters. Element symbols O, S, etc. and locants are used to designate the location of
 * organyl groups.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.7.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bn.gif', pin: '3-ethyl 1-S-methyl 1-thiodicarbonate' },
  { formula: 'CH3-S-CS-O-CH3', pin: 'O,S-dimethyl carbonodithioate' },
  { formula: '(CH3)2CH-S-CN', pin: 'propan-2-yl thiocyanate' },
]);
