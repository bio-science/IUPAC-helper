/**
 * P-77.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature is used to derive preferred IUPAC names for monosalts of di- or
 * polyamines. Adduct names (see P-77.1.3) may be used in general nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-77.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P77120a.gif', pin: '2-aminoethan-1-aminium chloride', otherNames: ['ethane-1,2-diamine monohydrochloride'] },
]);
