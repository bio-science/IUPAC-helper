/**
 * P-66.5.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following names are preferred IUPAC names, with unlimited substitution, except for formonitrile
 * whose substitution rules are the same as formic acid (see P-65.1.8) and, obviously, for oxalonitrile
 * for which no substitution is possible.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.2.1', [
  { formula: 'HCN', name: 'formonitrile(PIN)' },
  { formula: 'CH3-CN', pin: 'acetonitrile', otherNames: ['ethanenitrile'] },
  { formula: 'C6H5-CN', pin: 'benzonitrile', otherNames: ['benzenecarbonitrile'] },
  { formula: 'NC-CN', pin: 'oxalonitrile', otherNames: ['ethanedinitrile'] },
]);
