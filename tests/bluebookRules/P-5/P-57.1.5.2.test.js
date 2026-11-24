/**
 * P-57.1.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained prefixes used as preferred prefixes (see P-29.6.1)
 * The two following prefixes are retained as preferred prefixes with unlimited substitution:”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.1.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105e.gif', preferredPrefix: 'phenyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105f.gif', name: '1,4-phenylene' },
]);
