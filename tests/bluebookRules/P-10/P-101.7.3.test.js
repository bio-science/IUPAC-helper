/**
 * P-101.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of substituent groups derived from parent structures are formed, by the general method
 * described in P-29, by adding the suffixes ‘yl’, ‘ylidene’, or ‘ylidyne’, as appropriate, to the name
 * of a parent, with elision of the final letter ‘e’, if present, before the letter ‘y’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101730a.gif', name: 'erythrinan-1β-yl butanoate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101730b.gif', name: 'tropan-3β-yl acetate' },
]);
