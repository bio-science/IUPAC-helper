/**
 * P-62.2.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefixes ‘nitrilo’ for –NP-15.3). The prefix ‘imino’ is reserved to denote only the divalent
 * substituent group =NH. Multiplicative names are preferred to those formed by substitutive
 * nomenclature when all conditions are fulfilled for the application of multiplicative nomenclature
 * (see P-51.3).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 679, P-62.2.5.1, example 1. [corrected 27 February 2019]
 *     Add 4-(4-cyanoanilino)benzonitrile
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205a.gif', pin: '4,4′-azanediyldibenzonitrile', otherNames: ['4-[(4-cyanophenyl)amino]benzonitrile', '4-(4-cyanoanilino)benzonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205b.gif', name: '2,2′,2′′-nitrilotriacetic acid' },
]);
