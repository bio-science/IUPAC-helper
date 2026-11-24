/**
 * P-65.5.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups derived from carbonic acid, carbamic acid, and related acids, such as ‘carbonyl’ from
 * carbonic acid, ‘carbamoyl’ from carbamic acid, and ‘carbamimidoyl’ from carbamimidic acid are used
 * to form the names of the corresponding acyl halides.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.5.3.1', [
  { formula: 'Cl-CO-Cl', pin: 'carbonyl dichloride' },
  { formula: 'Br-CO-Cl', pin: 'carbonyl bromide chloride', notNames: ['carbonobromidic chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650503a.gif', pin: 'N-methylcarbonazidimidoyl fluoride' },
  { formula: 'NC-CO-Cl', pin: 'carbonocyanidoyl chloride' },
  { formula: 'H2N-CO-NCO', pin: 'carbamoyl isocyanate' },
]);
