/**
 * P-26.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amplification of symmetrical simplified phane skeletons with at least two superatoms representing
 * different amplificants results in the loss of symmetry and creates numbering alternatives. In such
 * cases, the lower available superatom locant is assigned to an amplificant that appears earlier in
 * the seniority of rings and ring systems (see P-44.2). The application of this procedure may require
 * a sequence of steps. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401c.gif', pin: '1(8,5)-quinolina-4(1,4)-phenanthrena-7(1,4)-naphthalenacyclononaphane', notNames: ['1(8,5)-quinolina-4(1,4)-naphthalena-7(4,1)-phenanthrenacyclononaphane', '1(8,5)-quinolina-4(4,1)-phenanthrena-7(1,4)-naphthalenacyclononaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401d.gif', pin: '3(2,5)-pyridina-1,7(1),5(1,4)-tribenzenaheptaphane', notNames: ['5(5,2)-pyridina-1,7(1),3(1,4)-tribenzenaheptaphane'] },
]);
