/**
 * P-25.3.8.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When locants are required for the fusion of a second-order or higher-order component then all
 * locants for linking components must be cited.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 262, P-25.3.8.3, example. [corrected 14 November 2018]
 *     For furo[3′,4′;5,6]pyrazino[2,3-c]pyridazine (PIN)
 *     read furo[3′,4′:5,6]pyrazino[2,3-c]pyridazine (PIN)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.8.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308g.gif', pin: 'furo[3′,4′:5,6]pyrazino[2,3-c]pyridazine' },
]);
