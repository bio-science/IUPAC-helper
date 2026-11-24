/**
 * P-52.1.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names for homogeneous heteromonocyclic parent hydrides consisting of ten or fewer ring
 * members are Hantzsch-Widman names (see P-22.2.2). Skeletal replacement (‘a’) names are preselected
 * names for homogeneous heteromonocyclic parent hydrides with more than ten ring members (see
 * P-22.2.3). Alternative names, which may be used in general nomenclature, are those formed by using
 * the prefix ‘cyclo’ (see P-22.2.5).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 573, P-52.1.5.1, example 1. [corrected 27 May 2020]
 *     Delete pentazolane
 *   Page 573, P-52.1.5.1, example 3. [corrected 11 November 2020]
 *     Replace the structure with:
 *     >
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.1.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520105a.gif', preselectedName: 'pentazolidine', otherNames: ['cyclopentaazane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520105b.gif', preselectedName: 'hexagerminane', otherNames: ['cyclohexagermane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520105c.gif', preselectedName: 'dodecasilacyclododecane', otherNames: ['cyclododecasilane'] },
]);
