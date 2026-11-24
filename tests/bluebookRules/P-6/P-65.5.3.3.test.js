/**
 * P-65.5.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl halides and pseudohalides from cyanic acid are formed in two ways:
 * (1) as acyl halides or pseudohalides of carbononitridic acid;
 * (2) by citing the name of the halide or pseudohalide after the name of the acid.
 * Method (1) generates preferred IUPAC names.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.5.3.3', [
  { formula: 'NC-Cl', pin: 'carbononitridic chloride', otherNames: ['cyanic chloride'] },
  { formula: 'NC-N3', pin: 'carbononitridic azide', otherNames: ['cyanic azide'] },
]);
