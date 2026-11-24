/**
 * P-21.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterogeneous parent hydrides composed of alternating heteroatoms, i.e., [a(ba)n hydrides],
 * excluding carbon atoms and the halogen atoms
 * Compounds containing an unbranched chain of alternating atoms terminated by two identical atoms of
 * the element coming later in the seniority order O > S > Se > Te > N > P >As > Sb > Bi > Si > Ge > Sn
 * > Pb > B >Al > Ga > In > Tl maybe named by citing successively a multiplying prefix denoting the
 * number of atoms of the terminal element followed by the ‘a’ term for that element, then the ‘a’ term
 * of the other element in the chain and the ending ‘ane’. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 135, P-21.2.3.1, example 6. [corrected 11 November 2020]
 *     Delete this example
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210203a.gif', preselectedName: 'tetrastannoxane' },
  { formula: 'SiH3-S-SiH3', preselectedName: 'disilathiane' },
  { formula: 'HS-O-SH', preselectedName: 'dithioxane' },
  { formula: 'PH2-Se-PH2', preselectedName: 'diphosphaselenane' },
  { formula: 'SiH3-NH-SiH3', name: 'N-silylsilanamine', notNames: ['disilazane'] },
]);
