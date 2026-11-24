/**
 * P-93.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphates, phosphonates, and related compounds
 * The ‘P=O’ bond, as conventionally written in phosphates, phosphonates and related compounds, is
 * considered as a single bond, as there are already four atoms or groups in the tetrahedral
 * configuration. Similarly, the formal arrangement of charges is not considered when determining the
 * configuration of a chiral molecule. As the stereodescriptors ‘R’ and ‘S’ describe the entire
 * structure, either a salt or an ester, the full name is placed in parentheses to denote the global
 * configuration.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1216, P-93.2.4, example 3 on this page. [modified 30 September 2020]
 *     For dihydrogen (S)-[O-methyl (¹⁷O,¹⁸O)phosphate] (PIN)
 *     read dihydrogen (S)-[O-methyl (¹⁷O1,¹⁸O1)phosphate] (PIN)
 *   Page 1216, P-93.2.4, example 3 on this page. [modified 3 March 2021]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93240a.gif', pin: 'sodium (R)-(O-methyl O-phenyl phosphorothioate)' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93240b.gif', pin: 'sodium (R)-(O-propan-2-yl methylphosphonothioate)', otherNames: ['sodium (R)-[O-(1-methylethyl) methylphosphonothioate]'] },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93240c.gif', pin: 'methyl (S)-[methyl(phenyl)phosphinate]' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93240d.gif', pin: 'dihydrogen (S)-[O-methyl (¹⁷O1,¹⁸O1)phosphate]' },
]);
