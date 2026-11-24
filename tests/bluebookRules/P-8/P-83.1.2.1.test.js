/**
 * P-83.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The name of a specifically labeled compound is formed by adding or inserting in brackets, [ ], the
 * nuclide symbol(s) preceded by any necessary locants before the denomination of that part of the
 * compound that is isotopically modified. When polylabeling is possible, the number of atoms that have
 * been labeled is always specified as a subscript to the atomic symbol(s) even in the case of
 * monolabeling. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-83.1.2.1', [
  { formula: 'C[²H2]Cl2', pin: 'dichloro[²H2]methane' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83121a.gif', pin: '1-(amino[¹⁴C]methyl)cyclopentan-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83121b.gif', pin: '1-(aminomethyl)cyclopentan-1-[¹⁸O]ol' },
]);
