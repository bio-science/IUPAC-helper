/**
 * P-74.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Zwitterionic compounds with at least one ionic center on a characteristic group
 * Zwitterionic compounds with at least one ionic center on a characteristic group may be named by
 * adding the appropriate ionic suffix to the name of the ionic parent hydride. In names, cationic
 * suffixes are cited before anionic suffixes. For assignment of lower locants, ionic centers on
 * skeletal atoms of the parent hydride are preferred to the locants for positions of attachment of
 * characteristic groups denoted by ionic suffixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1110, P-74.1.2, example 1. [modified 11 November 2020]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74120a.gif', pin: '1,1,1-trimethylhydrazin-1-ium-2-sulfonate' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74120b.gif', pin: '1-methyl-4,6-diphenylpyridin-1-ium-2-carboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74120c.gif', pin: 'N,1,4-triphenyl-1H-1,2,4-triazol-4-ium-3-aminide', otherNames: ['N-(1,4-diphenyl-1H-1,2,4-triazol-4-ium-3-yl)benzenaminide'] },
]);
