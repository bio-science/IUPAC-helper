/**
 * P-15.1.7.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Alcohols are named by attaching the suffix ‘ol’ to the name of the parent hydride, with elision of
 * the final letter ‘e’ in the parent hydride, if present. When alone in the structure, the
 * characteristic group(s) must receive the lowest locant(s) possible, which is (are) cited immediately
 * in front of the suffix (see P-14.3.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.7.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501g.gif', pin: 'propan-1-ol' },
]);
