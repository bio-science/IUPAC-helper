/**
 * P-101.6.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Saturated, or partially saturated, carbocyclic and heterocyclic ring components fused to a parent
 * structure are named using ‘hydro’ prefixes. When there is a choice between primed and unprimed
 * locants, the unprimed locants are used.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1331, P-101.6.5, example 2. [corrected 17 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.6.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101650a.gif', name: '3′,4′,5′,6′-tetrahydrobenzo[7,8]morphinan' },
]);
