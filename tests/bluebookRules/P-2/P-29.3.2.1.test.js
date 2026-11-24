/**
 * P-29.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names for simple substituent groups derived from acyclic hydrocarbons with a single free valence at
 * the end of the longest chain are traditionally formed according to method (1) of P-29.2. They are
 * generically called ‘alkyl’, ‘alkylidene’, and ‘alkylidyne’ substituent groups. The free valences are
 * assigned the locant 1, which is omitted in names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302a.gif', preferredPrefix: 'ethyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302b.gif', preferredPrefix: 'propyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302c.gif', preferredPrefix: 'butyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302d.gif', preferredPrefix: 'propylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302e.gif', preferredPrefix: 'butylidyne' },
]);
