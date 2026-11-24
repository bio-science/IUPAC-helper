/**
 * P-77.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature is used to derive preferred IUPAC names for acid salts of polybasic
 * organic acids (see P-65.6.2.3). In general nomenclature, the hydrogen salt method or a descriptive
 * phrase may be used.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-77.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P77320a.gif', pin: 'potassium 3-carboxypropanoate', otherNames: ['butanedioic acid monopotassium salt'] },
]);
