/**
 * P-21.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrocarbons
 * The saturated unbranched acyclic hydrocarbons C2H6, C3H8, and C4H10 have the retained names ethane,
 * propane, and butane, respectively. Systematic names for the higher members of this series consist of
 * a numerical term (see Table 1.4) followed by the ending ‘ane’ with elision of the terminal letter
 * ‘a’ from the numerical term. The generic name for saturated acyclic hydrocarbons (branched or
 * unbranched) is ‘alkane’. The chain is numbered from one end to the other with arabic numbers. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210201a.gif', pin: 'heptane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210201b.gif', pin: 'icosane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210201c.gif', pin: 'tricosane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210201d.gif', pin: 'heptacontane' },
]);
