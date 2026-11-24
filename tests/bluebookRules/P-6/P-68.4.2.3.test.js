/**
 * P-68.4.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mono-, di- and polynuclear parent hydride names, except for ‘oxidane’ itself, are used for
 * compounds with contiguous chalcogen atoms terminated by hydrogen atoms.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.2.3', [
  { formula: 'HSe-Te-SeH', preselectedName: 'tellanediselenol', notNames: ['selane-TeSe-selenotelluroperoxol'] },
  { formula: 'H-OO-S-OH', notNames: ['dioxidane-SO-peroxol'] },
  { formula: 'H-OO-SS-H', preselectedName: 'disulfaneperoxol' },
]);
