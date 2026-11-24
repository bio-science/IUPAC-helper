/**
 * P-54.4.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “. The retained names for the partially saturated heterocycles, ‘indane’, ‘indoline’, ‘isoindoline’,
 * and ‘chromane’, ‘isochromane’ and their chalcogen analogues are not used as preferred IUPAC names,
 * but are acceptable for use in general nomenclature (see P-31.2.3.3.1). Preferred IUPAC names are
 * based on the retained mancude names indene, 1H-indole, 1H-isoindole, 2H-1-benzopyran, and
 * 1H-2-benzopyran (and their chalcogen analogues) modified by ‘hydro’ prefixes (see P-54.4.3.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-54.4.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403i.gif', pin: '2,3-dihydro-1H-indene', otherNames: ['indane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540403j.gif', pin: '3,4-dihydro-1H-2-benzothiopyran', otherNames: ['isothiochroman'] },
]);
