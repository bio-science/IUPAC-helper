/**
 * P-24.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice for locants, the lowest set of locants for all spiro atoms is selected when
 * compared as a set in increasing order and, if there is a further choice, in their order of citation
 * in the name.
 * Explanation: the locant set ‘1,1′,2′′,6′ ’ in (I) is lower than ‘1,2′,2′′,5′ ’ in (II) or
 * ‘1′,1′′,2,6′ ’ in (III).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240402a.gif', pin: '2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]heptane]' },
  { pin: '1′′H,2H,5′H,7′H-1,6′:1′,2′′-dispiroter[naphthalene] (I)', notNames: ['1′H,1′′H,2H,3′H-1,2′:5′,2′′-dispiroter[naphthalene] (II)'] },
]);
