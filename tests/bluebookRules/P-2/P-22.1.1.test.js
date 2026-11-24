/**
 * P-22.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The names of saturated monocyclic hydrocarbons are formed by attaching the nondetachable prefix
 * ‘cyclo’ to the name of the acyclic saturated unbranched hydrocarbon with the same number of carbon
 * atoms. The generic name of monocyclic hydrocarbons is ‘cycloalkane’. Numbering proceeds sequentially
 * around the ring, usually clockwise. For unsaturated monocyclic hydrocarbons, see P-31.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220101a.gif', pin: 'cyclopropane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220101b.gif', pin: 'cyclohexane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220101c.gif', pin: 'cyclotetradecane' },
]);
