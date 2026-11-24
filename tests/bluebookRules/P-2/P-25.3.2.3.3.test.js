/**
 * P-25.3.2.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Criteria for selection of the preferred orientation
 * Polycyclic fused ring systems are oriented in accordance with the following criteria considered in
 * order until a decision is reached:
 * (a) maximum number of rings in a horizontal row;
 * Fused ring systems are drawn in order to achieve the maximum number of ortho-fused rings, with
 * vertical common bonds, in a horizontal row. The relevant vertical bonds are always those furthest
 * apart. If the correct orientation is not immediately apparent the horizontal row is bisected by a
 * horizontal axis and a vertical axis to form four quadrants. Rings which are not bisected by the
 * horizontal axis do not belong to the main row and are not considered in the counting of rings in the
 * main row.
 * Accordingly, polyacenes are senior to polyaphenes for an equal number of rings, and anthracene is
 * senior to phenanthrene
 * (b) maximum number of rings in upper right quadrant;
 * In the preferred orientation, the maximum number of rings must appear above and to the right of the
 * horizontal row (upper right quadrant). …
 * Accordingly, phenanthrene (1½ rings in the upper right quadrant) is senior to phenalene [1 ring (two
 * ½ rings) in the upper right quadrant].
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302v.gif', name: '3 rings in horizontal row' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302w.gif', name: '2 rings in horizontal row' },
]);
