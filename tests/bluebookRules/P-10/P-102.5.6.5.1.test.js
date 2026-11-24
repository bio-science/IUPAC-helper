/**
 * P-102.5.6.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Choice of a parent structure
 * When the same alditol can be derived from either of two different aldoses, or from an aldose or a
 * ketose, the recommended structure is derived from Rule P-102.4, with the exception of the retained
 * names fucitol and rhamnitol.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565a.gif', name: 'D-glucitol', notNames: ['L-gulitol'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565b.gif', name: 'D-arabinitol', notNames: ['D-lyxitol'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565c.gif', name: 'L-fucitol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102565d.gif', name: 'L-rhamnitol' },
]);
