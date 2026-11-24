/**
 * P-65.2.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional replacement of one of the –OH groups of carbonic acid by various atoms or groups is
 * expressed by the following infixes: fluorido, –F; chlorido, –Cl; bromido, –Br; iodido, –I; azido,
 * –N3; amido, –NH2; cyanido, –CN; isocyanido, –NC; isocyanatido, –NCO; isothiocyanatido, –NCS;
 * isoselenocyanatido, –NCSe; isotellurocyanatido, –NCTe (see P-67.1.2.3.2).
 * Italic letter locants N, N′, etc. are used to designate substitution on nitrogen atoms.
 * Replacement by the –NHNH2 group results in hydrazinecarboxylic acid and related derivatives (see
 * P-68.3.1.2).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.4', [
  { formula: 'H2N-CO-OH', pin: 'carbamic acid', notNames: ['carbonamidic acid'] },
  { formula: 'H2N-C(=NH)-OH', pin: 'carbamimidic acid', notNames: ['carbonamidimidic acid'] },
  { formula: 'H2N-CO-SH', pin: 'carbamothioic S-acid' },
  { formula: 'H2N-C(=NH)-SeH', pin: 'carbamimidoselenoic acid' },
  { formula: 'Cl-CO-OH', pin: 'carbonochloridic acid' },
  { formula: 'NC-CO-OH', pin: 'carbonocyanidic acid' },
  { formula: 'N3-CO-OH', pin: 'carbonazidic acid' },
  { formula: 'SCN-CO-OH', pin: 'carbonisothiocyanatidic acid' },
  { formula: 'H2N-NH-CO-OH', pin: 'hydrazinecarboxylic acid', otherNames: ['carbonohydrazidic acid'] },
]);
