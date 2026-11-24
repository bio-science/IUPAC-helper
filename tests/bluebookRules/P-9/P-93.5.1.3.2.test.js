/**
 * P-93.5.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two different ligands are attached at the same position of a monocycle, then the
 * lowest-numbered ligand named as a suffix is chosen as reference ligand. If none of the ligands is
 * named as a suffix, then one of the ligands having the lowest locant and higher ranking in the
 * Sequence Rule is chosen as a reference ligand. The relationship of the Sequence-Rule-higher ranking
 * at geminally substituted positions, relative to the reference group, is cited as ‘c’ or ‘t’, as
 * required.
 * Explanation: In this compound, different numberings are necessary in accordance with the precedence
 * of ‘R’ ligands and ‘cis’ arrangements for lowest locants [this compound is example 7 discussed in …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1247, P-93.5.1.3.2, Example 1. [Corrected 3 September 2018]
 *     For 1,2-t-dichlorocyclopentane-1-r-carboxylic acid
 *     read 1,2t-dichlorocyclopentane-1r-carboxylic acid
 *     replace structure with:
 *   Page 1247, P-93.5.1.3.2, Example 2. [Corrected 3 September 2018]
 *     For 1-r-bromo-1-chloro-3-t-ethyl-3-methylcyclohexane
 *     read 1r-bromo-1-chloro-3t-ethyl-3-methylcyclohexane
 *     replace structure with:
 *   Page 1247, P-93.5.1.3.2, Example 3. [Corrected 3 September 2018]
 *     For 1-r,2-c,3-c,4-t,5-t,6-t-hexachlorocyclohexane
 *     read 1r,2c,3c,4t,5t,6t-hexachlorocyclohexane
 *     replace structure (showing positions of r, c and t) with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93513c.gif', pin: 'rel-(1R,2R)-1,2-dichlorocyclopentane-1-carboxylic acid', otherNames: ['1,2t-dichlorocyclopentane-1r-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93513d.gif', pin: 'rel-(1R,3R)-1-bromo-1-chloro-3-ethyl-3-methylcyclohexane', otherNames: ['1r-bromo-1-chloro-3t-ethyl-3-methylcyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93513e.gif', name: '1r,2c,3c,4t,5t,6t-hexachlorocyclohexane' },
]);
