/**
 * P-70.3.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In zwitterionic compounds, cumulative suffixes precede functional suffixes and have seniority for
 * lowest locants:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1050, P-70.3.3.2.2, example [corrected 7 April 2021]
 *     Delete this correction (leave as printed)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-70.3.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P70332c.gif', pin: '1,1,1-trimethylhydrazin-1-ium-2-sulfonate' },
]);
