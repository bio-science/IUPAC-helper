/**
 * P-104.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives of inositols
 * Inositols are modified in the same way as carbohydrates to generate names for derivatives. There is
 * no limit to O-substitution by alkyl (aryl) groups (see P-102.5.6.1). Hydroxy groups can be exchanged
 * for amino groups using the ‘deoxy’ operation (see P-102.5.4). When characteristic groups that are
 * senior to hydroxy groups are put in the place of a hydroxy group, fully substitutive names must be
 * constructed. However, esters are named as alkanoates/carboxylates. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1419, P-104.3.1, example 3 on this page. [modified 12 August 2020]
 *     For 2-methyl-myo-inositol
 *     read 2-C-methyl-myo-inositol
 *     for (1s,2S,3R,4r,5S,6R)-1-methylcyclohexane-1,2,3,4,5,6-hexol
 *     read (1s,2R,3S,4s,5R,6S)-1-methylcyclohexane-1,2,3,4,5,6-hexol
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-104.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104310a.gif', name: '1D-1-amino-1-deoxy-myo-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104310b.gif', name: '1L-1-deoxy-6-O-methyl-1-sulfanyl-allo-inositol', notNames: ['1L-6-O-methyl-1-thio-allo-inositol'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104310c.gif', name: 'myo-inositol 2-acetate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104310d.gif', name: '1D-myo-inositol 1-(dihydrogen phosphate)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104310e.gif', name: '2-C-methyl-myo-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104310f.gif', notNames: ['2-carboxy-2-deoxy-myo-inositol'] },
]);
