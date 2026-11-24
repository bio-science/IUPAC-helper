/**
 * P-22.2.2.1.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The stem ‘irine’ is used in place of ‘irene’ for rings only containing nitrogen heteroatoms;
 * otherwise the stem ‘irene’ is used.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 146, P-22.2.2.1.5.1, lines 1/2. [corrected 9 January 2019]
 *     For ...rings containing only nitrogen; otherwise...
 *     read ...rings only containing nitrogen heterotoms; otherwise...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202m.gif', pin: '1H-azirine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202n.gif', pin: 'oxirene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202o.gif', pin: 'oxazirene' },
]);
