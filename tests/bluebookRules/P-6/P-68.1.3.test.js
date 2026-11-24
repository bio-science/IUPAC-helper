/**
 * P-68.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Modification of the degree of hydrogenation
 * Double bonds are denoted by the ‘ene’ ending or by saturation of double bonds of mancude ring
 * systems by the use of ‘hydro’ prefixes, as described in Sections P-31.1 and P-31.2, respectively.
 * Hydro/dehydro prefixes are now classified as detachable prefixes but are not included in the
 * category of alphabetized detachable prefixes (see P-14.4; see also P-15.1.5.2, P-31.2, P-58.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68130a.gif', preselectedName: 'triborene(5)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68130b.gif', name: '1-methyldecahydro-1-benzaluminine' },
]);
