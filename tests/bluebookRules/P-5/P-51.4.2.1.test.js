/**
 * P-51.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature is used to derive preferred IUPAC names for
 * heteromonocyclic compounds having more than ten ring atoms (see P-22.2.3).
 * Skeletal replacement (‘a’) nomenclature is also possible with rings having less than 10 ring members
 * if the skeletal replacement (‘a’) prefix represents a metal as defined in P-69.4.
 * Adapting the principles of the Hantzsch-Widman system to the elements of Groups 1-12 in and
 * including their skeletal replacement (‘a’) prefixes would be a major change from previous
 * recommendations …
 * The option to include the metallic elements in addition to the metals in Groups 13 through 16 in the
 * Hantzsch-Widman system and their skeletal replacement (‘a’) prefixes (see P-69.4) is a major …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 568, P-51.4.2.1, example 2. [modified 29 January 2020]
 *     Delete this correction. These are organic substitutive names and chloro is the substituent name
 *     (RB page 138). The error is on page 1044, P-69.4, example 1
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402a.gif', pin: '1-azacyclododeca-1,3,5,7,9,11-hexaene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402b.gif', name: '1,1-dichloro-2,3,4,5-tetramethylplatinole (Hantzsch-Widman name)' },
]);
