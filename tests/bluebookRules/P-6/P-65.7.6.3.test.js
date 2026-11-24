/**
 * P-65.7.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyanhydrides consisting of a polybasic acid residue and the equivalent number of monobasic
 * residues are named by citing the monobasic acid groups, which may be substituted by additional
 * anhydride linkages, in alphabetical order followed by the polybasic acid residue and the class name
 * ‘anhydride’ with the appropriate numerical prefix. Locants may be used to specify the positions of
 * the anhydride linkages.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 832, P-65.7.6.3, example 2. [corrected 31 October 2018]
 *     For 6-acetic 3-[4-(acetyloxy)-4-oxo-2-methylbutanoic 2-propanoic naphthalene-2,3,6-tricarboxylic
 *     trianhydride (PIN)
 *     read 6-acetic 3-[4-(acetyloxy)-2-methyl-4-oxobutanoic] 2-propanoic
 *     naphthalene-2,3,6-tricarboxylic trianhydride (PIN)
 *   Page 832, P-65.7.6.3, example 3. [corrected 16 June 2021]
 *     For P,P′-diacetic P,P′-dipropanoic ethane-1,2-diylbis(phosphonic) tetraanhydride (PIN)
 *     read P,P′-diacetic P,P′-dipropanoic (ethane-1,2-diyl)bis(phosphonic) tetraanhydride (PIN)
 *   Page 833, P-65.7.6.3, example 1 on this page. [corrected 31 October 2018]
 *     For 5-(acetyloxy)-5-oxopentanoic 6-(butanoyloxy)-6-oxohexanoic 4-(propanoyloxy)-4-oxobutanoic
 *     phosphoric trianhydride
 *     read 5-(acetyloxy)-5-oxopentanoic 6-(butanoyloxy)-6-oxohexanoic 4-oxo-4-(propanoyloxy)butanoic
 *     phosphoric trianhydride (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706d.gif', pin: '3,6-diacetic 2-propanoic naphthalene-2,3,6-tricarboxylic trianhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706e.gif', pin: '6-acetic 3-[4-(acetyloxy)-2-methyl-4-oxobutanoic] 2-propanoic naphthalene-2,3,6-tricarboxylic trianhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706f.gif', pin: 'P,P′-diacetic P,P′-dipropanoic (ethane-1,2-diyl)bis(phosphonic) tetraanhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706g.gif', pin: '3,6-diacetic 2-propanoic 8-[2-(acetyloxy)-2-oxoethyl]naphthalene-2,3,6-tricarboxylic trianhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706h.gif', pin: '5-(acetyloxy)-5-oxopentanoic 6-(butanoyloxy)-6-oxohexanoic 4-oxo-4-(propanoyloxy)butanoic phosphoric trianhydride' },
]);
