/**
 * P-77.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names for salts of organic bases are binary names formed by citing the name of the
 * cation followed by that of the anion.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-77.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P77110a.gif', pin: 'anilinium choride', otherNames: ['benzenaminium chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P77110b.gif', pin: 'bis(methanaminium) sulfate' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P77110c.gif', pin: 'N,N-diethylethanaminium hydrogen sulfate' },
]);
