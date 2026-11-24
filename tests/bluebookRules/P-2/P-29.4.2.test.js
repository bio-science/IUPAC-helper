/**
 * P-29.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compound catenated substituent groups
 * Compound catenated substituent groups are used only in multiplicative nomenclature (see P-15.3).
 * Names are formed by adding di- or polyvalent substituent groups to one another, specifically by
 * adding the names of peripheral substituent groups to that of a central substituent group, as
 * prescribed in multiplicative nomenclature (see P-15.3). Substitution of components is allowed when
 * the symmetry of the whole substituent group is preserved.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 364, P-29.4.2, example 5. [corrected 23 January 2019]
 *     For silanediylbis(1-fluoroethylene)
 *     read [not silanediylbis(1-fluoroethylene)]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290402a.gif', preferredPrefix: 'silanediyldi(ethane-2,1-diyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290402b.gif', preferredPrefix: 'methylenebis(disilane-2,1-diyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290402c.gif', preferredPrefix: '1,4-phenylenebis(methylene)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290402d.gif', preferredPrefix: 'cyclohexane-1,4-diylbis(sulfanediyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290402e.gif', preferredPrefix: 'silanediylbis(1-fluoroethane-2,1-diyl)', notNames: ['silanediylbis(1-fluoroethylene)'] },
]);
