/**
 * P-58.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When there is a choice, ‘added indicated hydrogen’ positions are assigned to peripheral ring atoms,
 * with the lowest locants consistent with the arrangement of double bonds in the compound as required.
 * Low locants are assigned to ‘added indicated hydrogen’ atoms in the presence of hydro prefixes used
 * to modify the degree of unsaturation.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202a.gif', pin: 'naphthalen-1(2H)-one' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202b.gif', pin: 'quinoline-1(2H)-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202c.gif', preferredPrefix: 'pyridin-1(2H)-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202d.gif', pin: 'naphthalen-4a(8aH)-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202e.gif', pin: 'pyrimidine-4,6(1H,5H)-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202f.gif', preferredPrefix: 'anthracen-9(10H)-yl-10-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202g.gif', preferredPrefix: '3,4-dihydroquinolin-2(1H)-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202h.gif', pin: '5,6,7,8-tetrahydronaphthalen-2(4aH)-one' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580202i.gif', pin: '1,3,4,5-tetrahydronaphthalene-4a(2H)-carboxylic acid' },
]);
