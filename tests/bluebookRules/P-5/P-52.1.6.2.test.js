/**
 * P-52.1.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names for von Baeyer compounds and for spiro compounds having only monocyclic
 * components and consisting of alternating heteroatoms, i.e., [ab]n, are formed by citing the
 * appropriate prefix, such as ‘bicyclo’, ‘spiro’, etc., and a descriptor enclosed within square
 * brackets followed by the number of the (‘a’) heteroatom, the skeletal replacement name of the (‘a’)
 * atom, and the skeletal replacement name of the (‘b’) heteroatom (see P-24.2.4.3); …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 575, P-52.1.6.2, example 2 . [corrected 19 September 2018]
 *     For 2,4,6,8,9,10-hexaoxa-1,3,5,7-tetrasilabicyclo[3.3.1.1³,⁷]decane
 *     read 2,4,6,8,9,10-hexaoxa-1,3,5,7-tetrasilatricyclo[3.3.1.1³,⁷]decane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.1.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520106c.gif', preselectedName: 'spiro[5.5]pentasiloxane', otherNames: ['1,3,5,7,9,11-hexaoxa-2,4,6,8,10-pentasilaspiro[5.5]undecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520106d.gif', preselectedName: 'tricyclo[3.3.1.1³,⁷]tetrasiloxane', otherNames: ['2,4,6,8,9,10-hexaoxa-1,3,5,7-tetrasilaadamantane', '2,4,6,8,9,10-hexaoxa-1,3,5,7-tetrasilatricyclo[3.3.1.1³,⁷]decane'] },
]);
