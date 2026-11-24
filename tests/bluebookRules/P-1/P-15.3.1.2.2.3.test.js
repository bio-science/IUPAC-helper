/**
 * P-15.3.1.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution on the central substituent group and on successive substituent groups of a
 * concatenated multiplicative substituent group is allowed provided that the sequence of atoms and
 * bonds, starting at the central substituent group, are identical in each of the branches.
 * Note: The preferred prefix given here would be ambiguous if the suffix ‘ylidene’ were not limited to
 * the indication of double bonds (see P-29.2); …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.1.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503m.gif', preferredPrefix: 'oxybis(methylazanediyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503n.gif', preferredPrefix: 'ethane-1,2-diylbis[azanylylidene(chloromethanylylidene)]' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503o.gif', preferredPrefix: 'oxybis(cyclopropylidenemethylene)' },
]);
