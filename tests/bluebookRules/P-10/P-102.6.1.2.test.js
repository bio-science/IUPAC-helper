/**
 * P-102.6.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “O-Glycosyl compounds
 * The substituent group formed by removal of a hydrogen atom from the anomeric –OH group is considered
 * as a compound substituent group formed by the ‘glycosyl’ group and an ‘oxy’ group. In the examples,
 * names are formed by using the seniority of class to determine the principal characteristic group to
 * be assigned to the monosaccharide or to the aglycone component.
 * Explanation: the principal function is an amide; the cyclic amide, benzamide, is senior to the
 * acyclic amide, propanamide.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1385, P-102.6.1.2, example 2. [corrected 23 September 2020]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.6.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102612a.gif', name: 'β-D-glucopyranosyloxy' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102612b.gif', name: '1-[4-(β-D-glucopyranosyloxy)phenyl]ethan-1-one', notNames: ['4′-( β-D-glucopyranosyloxy)acetophenone', '4-acetylphenyl β-D-glucopyranoside'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102612c.gif', name: '21β-carboxy-11-oxo-30-norolean-12-en-3β-yl (2-O-β-D-glucopyranosyluronic acid)-α-D-glucopyranosiduronic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102612d.gif', name: '4-[(2R)-2-amino-3-hydroxy-2-methylpropanamido]-N-{1-[(2R,5S,6R)-5-{[4,6-dideoxy-4-(dimethylamino)-α-D-glucopyranosyl]oxy}-6-methyloxan-2-yl]-2-oxo-1,2-dihydropyrimidin-4-yl}benzamide' },
]);
