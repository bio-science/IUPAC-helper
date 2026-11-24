/**
 * P-82.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Priority between isotopically substituted and unmodified atoms or groups
 * When there is a choice between equivalent numberings in an isotopically unmodified compound, the
 * starting point and the direction of numbering of the analogous isotopically substituted compound are
 * chosen so as to give lowest locants to the modified atoms or groups considered together in one
 * series in increasing numerical order. If a choice still remains, precedence for the lowest locants
 * is given to the nuclide of higher atomic number. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1141, P-82.5.2, example 1 on this page, structural formula. [corrected 19 June 2019]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82520a.gif', notNames: ['(3-¹⁴C)butane'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82520b.gif', notNames: ['(2-¹⁴C,3,3-²H2)butane'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82520c.gif', notNames: ['(3-¹⁴C,2-²H1)butane'] },
]);
