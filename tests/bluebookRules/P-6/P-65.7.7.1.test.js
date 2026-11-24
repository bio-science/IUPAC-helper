/**
 * P-65.7.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic anhydrides formed from two acid groups attached to the same parent hydride structure are
 * named in two ways:
 * (1) as heterocyclic pseudoketones;
 * (2) by changing the class term ‘acid’ to ‘anhydride’ in the systematic or retained name of the
 * dibasic acid.
 * Method (1) generates preferred IUPAC names”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707a.gif', pin: 'oxolane-2,5-dione', otherNames: ['3,4-dihydrofuran-2,5-dione', 'butanedioic anhydride', 'succinic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707b.gif', pin: '3-methyloxolane-2,5-dione', otherNames: ['3-methyl-3,4-dihydrofuran-2,5-dione', '2-methylbutanedioic anhydride', 'methylsuccinic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707c.gif', pin: 'furan-2,5-dione', otherNames: ['maleic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707d.gif', pin: '3-bromofuran-2,5-dione', otherNames: ['bromomaleic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707e.gif', pin: '2-benzofuran-1,3-dione', otherNames: ['isobenzofuran-1,3-dione', 'phthalic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707f.gif', pin: '5-nitro-2-benzofuran-1,3-dione', otherNames: ['5-nitroisobenzofuran-1,3-dione', '4-nitrophthalic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707g.gif', pin: '1H,3H-benzo[de][2]benzopyran-1,3-dione', otherNames: ['1H,3H-benzo[de]isochromene-1,3-dione', 'naphthalene-1,8-dicarboxylic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707h.gif', pin: '1,8,8-trimethyl-3-oxabicyclo[3.2.1]octane-2,4-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707i.gif', pin: '1,3-dioxooctahydro-2-benzofuran-4,5-dicarboxylic acid', otherNames: ['1,3-dioxooctahydroisobenzofuran-4,5-dicarboxylic acid', 'cyclohexane-1,2,3,4-tetracarboxylic acid 3,4-anhydride'] },
]);
