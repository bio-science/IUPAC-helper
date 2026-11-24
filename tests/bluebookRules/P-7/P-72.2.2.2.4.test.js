/**
 * P-72.2.2.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anionic centers on other characteristic groups
 * Anionic centers generated formally by the removal of hydrons from atoms of characteristic groups
 * other than those considered in P-72.2.2.2.1, P-72.2.2.2.2, and P-72.2.2.2.3 are named on the basis
 * of the corresponding anionic parent hydrides. Suffixes such as ‘amidide’ and ‘carboxamidide’ are not
 * recommended.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1073, P-72.2.2.2.4, example 1. [corrected 19 September 2018]
 *     For (2-methylpropan-2-y)trioxidanide
 *     read (2-methylpropan-2-yl)trioxidanide
 *   Page 1073, P-72.2.2.2.4, example 4. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.2.2.4', [
  { formula: '(CH3)3C-O-O-O⁻', pin: 'tert-butyltrioxidanide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222m.gif', pin: '1-oxoethan-1-ide' },
  { formula: 'CH3-CO-NH⁻', pin: 'acetylazanide', otherNames: ['acetylamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222n.gif', pin: 'acetylhydrazine-1,1-diide', otherNames: ['acetyldiazane-1,1-diide'] },
  { formula: 'HO-NH⁻', preselectedName: 'hydroxyazanide', otherNames: ['hydroxyamide'] },
  { formula: 'HO-N²⁻', preselectedName: 'hydroxyazanediide', otherNames: ['hydroxyimide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222o.gif', pin: '1,3,5,7-tetraoxo-5,7-dihydrobenzo[1,2-c:4,5-c′]dipyrrole-2,6(1H,3H)-diide', notNames: ['1,3,5,7-tetraoxo-5,7-dihydropyrrolo[3,4-f]isoindole-2,6(1H,3H)-diide'] },
]);
