/**
 * P-52.1.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names for von Baeyer compounds and for spiro compounds having only monocyclic
 * components and consisting entirely of heteroatoms of the same kind are names formed by citing the
 * appropriate prefix, such as ‘bicyclo’, ‘spiro’, etc., and descriptor enclosed within square brackets
 * followed by a numerical prefix for the total number of heteroatoms and the name of the mononuclear
 * parent hydride; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.1.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520106a.gif', preselectedName: 'bicyclo[4.2.1]nonasilane', otherNames: ['nonasilabicyclo[4.2.1]nonane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520106b.gif', preselectedName: 'tricyclo[5.3.1.1²,⁶]dodecasilane', otherNames: ['dodecasilatricyclo[5.3.1.1²,⁶]dodecane'] },
]);
