/**
 * P-61.9
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ISOCYANIDES
 * This is a change in these recommendations. Preferred IUPAC names are formed substitutively using the
 * prefix ‘isocyano’ attached directly to a parent hydride. Previously, functional class names were
 * recommended for this class.
 * Compounds containing the –NC group attached to a parent hydride structure, are named by substitutive
 * nomenclature and the prefix ‘isocyano’. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 665, P-61.9, example 1. [corrected 26 September 2018]
 *     Replace the structure with:
 *     C6H5-NC
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.9', [
  { formula: 'C6H5-NC', pin: 'isocyanobenzene', otherNames: ['phenyl isocyanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610900a.gif', pin: '4-isocyanobenzoic acid' },
]);
