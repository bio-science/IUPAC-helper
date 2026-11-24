/**
 * P-14.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Simple prefixes (i.e., those describing atoms and unsubstituted substituents) are arranged
 * alphabetically; multiplicative prefixes, if necessary, are then inserted and do not alter the
 * alphabetical order already established.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405a.gif', pin: '1-ethyl-1-methylcyclohexane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405b.gif', pin: '1-ethyl-4-methylcyclohexane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405c.gif', pin: '3,3-dibromo-3-cyclohexylpropanoic acid', notNames: ['3-cyclohexyl-3,3-dibromopropanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405d.gif', pin: '5-(butan-2-yl)-5-butylhentriacontane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405e.gif', pin: '4-butyl-4-tert-butylcyclohexan-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405f.gif', pin: '2,5,8-trichloro-1,4-dimethylnaphthalene', notNames: ['1,4-dimethyl-2,5,8-trichloronaphthalene', '1,4,6-trichloro-5,8-dimethylnaphthalene'] },
]);
