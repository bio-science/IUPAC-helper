/**
 * P-68.3.1.2.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of functions having seniority the prefix ‘hydrazinylidene’ is used substitutively,
 * and in multiplicative nomenclature the prefix ‘hydrazinediylidene’ is used.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312i.gif', pin: '4-[(propan-2-ylidene)hydrazinylidene]cyclohexane-1-carboxylic acid', otherNames: ['4-[(1-methylethylidene)hydrazinylidene]cyclohexane-1-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312j.gif', pin: '4,4′-hydrazinediylidenedi(cyclohexane-1-carboxylic acid)' },
]);
