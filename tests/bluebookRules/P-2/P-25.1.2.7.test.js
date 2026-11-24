/**
 * P-25.1.2.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ace....ylenes. A hydrocarbon parent component that consists of a five-membered ring ortho- and
 * peri-fused to naphthalene, anthracene, or phenanthrene is named by adding the prefix ‘ace’ to the
 * retained name and changing the ending ‘alene’, ‘acene’, or ‘ene’, respectively, to ‘ylene’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.2.7', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102m.gif', pin: 'acenaphthylene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102n.gif', pin: 'aceanthrylene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102o.gif', pin: 'acephenanthrylene' },
]);
