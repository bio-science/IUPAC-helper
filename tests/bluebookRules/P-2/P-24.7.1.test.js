/**
 * P-24.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a central ring component is spirofused to three or more identical terminal ring components,
 * the central ring component is cited first and its locants are unprimed. The terminal ring components
 * are cited with the appropriate multiplicative prefix (‘tris’, ‘tetrakis’, etc.) and their locants
 * are primed, double primed, etc., in accordance with the lowest possible locants of the spiro atoms
 * of the central ring component. The spiro atoms are indicated by pairs of locants separated by a
 * colon. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 190, P-24.7.1, example. [corrected 8 May 2019]
 *     read trispiro[1,3,5-trithiane-2,2′:4,2′′:6,2′′′-tris(bicyclo[2.2.1]heptane)] (PIN)
 *     read trispiro[[1,3,5]trithiane-2,2′:4,2′′:6,2′′′-tris(bicyclo[2.2.1]heptane)] (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240701a.gif', pin: 'trispiro[[1,3,5]trithiane-2,2′:4,2′′:6,2′′′-tris(bicyclo[2.2.1]heptane)]' },
]);
