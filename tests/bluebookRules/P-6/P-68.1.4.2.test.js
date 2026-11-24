/**
 * P-68.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups for the boron acids
 * The general methodology for forming substituent groups derived from the boron acids has been
 * described in P-67.1.4.2. Except for the name ‘borono’ for (HO)2B– which is retained, their names are
 * formed substitutively based on the parent hydride ‘borane’, BH3. Chalcogen analogues of ‘borono’ are
 * named by replacement prefixes, and not replacement infixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.4.2', [
  { formula: '(HO)2B–', preselectedPrefix: 'borono' },
  { formula: '(HS)BH–', preselectedPrefix: 'sulfanylboranyl' },
  { formula: '(HO)(HS)B–', preselectedPrefix: 'thioborono' },
  { formula: '(HSe)2B–', preselectedPrefix: 'diselenoborono' },
  { formula: 'Cl-BH–', preselectedPrefix: 'chloroboranyl', notNames: ['chloroboryl'] },
  { formula: '(H2N)2B–', preselectedPrefix: 'diaminoboranyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68142a.gif', preferredPrefix: 'hydroxy(methyl)boranyl' },
]);
