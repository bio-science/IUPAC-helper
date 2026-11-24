/**
 * P-16.5.1.11
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are used to enclose groups attached to a chain in linear formulas.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.11', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605p.gif', pin: 'propane-2-thiol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605q.gif', pin: '3-hydroxybutan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605r.gif', pin: '2,2-dimethylpentane' },
]);
