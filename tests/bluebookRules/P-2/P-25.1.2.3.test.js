/**
 * P-25.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyalenes. A hydrocarbon parent component consisting of two identical ortho-fused monocyclic
 * hydrocarbon rings is named by citing the numerical prefix (‘penta’, ‘hepta’, etc.) that denotes the
 * number of carbon atoms in each ring followed by the ending ‘alene’ (derived from naphthalene) with
 * elision of a letter ‘a’. The name naphthalene is retained.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102e.gif', pin: 'pentalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102f.gif', pin: 'octalene' },
]);
