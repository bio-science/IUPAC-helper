/**
 * P-24.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Where appropriate the maximum number of noncumulative double bonds is added (i.e., the system is
 * made mancude) after construction of the complete skeleton. Indicated hydrogen (P-14.7) of individual
 * components is not cited (ref. 8). No indicated hydrogen is cited when none is present in the spiro
 * system. If indicated hydrogen is needed, it is cited in front of the spiro atom locants.
 * Note: This treatment of indicated hydrogen was introduced in the 1999 publication on the
 * nomenclature of spiro compounds (ref. 8)
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to component names (see P-16.5.2.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240302a.gif', pin: '1H,1′H-2,2′-spirobi[naphthalene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240302b.gif', pin: '3H,3′H-2,2′-spirobi[[1]benzothiophene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240302c.gif', pin: '1,1′-spirobi[indene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240302d.gif', pin: '1,1′-spirobi[isoindole]' },
]);
