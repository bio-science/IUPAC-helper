/**
 * P-25.3.3.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The numbering of peripheral atoms in the preferred orientation starts from the uppermost ring. If
 * there is more than one uppermost ring, the ring furthest to the right is chosen. Numbering starts
 * from the nonfused atom most counterclockwise in the ring selected and proceeds in a clockwise
 * direction around the system, including fusion heteroatoms but not fusion carbon atoms. …
 * If the uppermost ring does not have a nonfusion atom, then numbering starts in the next ring
 * encountered when proceeding around the system in a clockwise direction.
 * Sections FR-5.3, FR-5.4 and FR-5.5 in ref. 4 describe numbering for more complex structures.
 * In particular, the orientation and numbering of helicenes has been changed. Recommended numbering
 * and former numbering for hexahelicene are shown below.
 * Higher helicenes follow the same pattern. A helicene is oriented so that a terminal ring is located
 * in the upper right quadrant; numbering always begins in this terminal ring.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.3.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303a.gif', pin: 'dipyrido[1,2-a:2′,1′-c]pyrazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303b.gif', pin: 'tetracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303c.gif', pin: 'benzo[m]tetraphene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303d.gif', pin: 'cyclopropa[de]anthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303e.gif', pin: 'hexahelicene' },
]);
