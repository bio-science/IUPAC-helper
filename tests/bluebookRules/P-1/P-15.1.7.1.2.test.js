/**
 * P-15.1.7.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monovalent simple substituent groups derived from unbranched acyclic hydrocarbons (alkanes) by the
 * removal of one hydrogen atom from a terminal carbon atom (subtractive operation) are named by
 * replacing the ending ‘ane’ of the name of the hydrocarbon by ‘yl’ (see P-29.3.2.1) or, if one
 * hydrogen atom is removed from a nonterminal carbon atom of a chain, by replacing the final ‘e’ of
 * the name of the hydrocarbon by ‘yl’ (see P-29.3.2.2) (‘yl’ is a cumulative suffix, see Fig. 1.1,
 * P-15.1.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.1.2', [
  { formula: 'CH3-CH2-CH2-CH2–', preferredPrefix: 'butyl' },
  { formula: 'CH3-CH2-CH2-CH2-CH2–', preferredPrefix: 'pentyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501a.gif', preferredPrefix: 'butan-2-yl' },
]);
