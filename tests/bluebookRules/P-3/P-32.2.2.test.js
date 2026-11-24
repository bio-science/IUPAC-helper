/**
 * P-32.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For polycyclic mancude compounds, when there is a choice low locants go first to the fixed
 * numbering of the system, then indicated hydrogen, followed by free valence suffix, and finally
 * ‘hydro’ prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-32.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320202a.gif', preferredPrefix: '3,4-dihydronaphthalen-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320202b.gif', preferredPrefix: '1,2-dihydroisoquinolin-3-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320202c.gif', preferredPrefix: '1,2,3,4-tetrahydronaphthalene-4a,8a-diyl' },
]);
