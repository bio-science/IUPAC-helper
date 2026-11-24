/**
 * P-61.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic hydrocarbons
 * Names of rings or cyclic systems substituted by rings or ring systems are formed in accordance with
 * the seniority order of rings and ring systems (see P-44.2.1 and P-44.4.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610202a.gif', pin: '2-phenylnaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610202b.gif', pin: 'cyclobutylcyclohexane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610202c.gif', pin: 'phenylcycloheptane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610202d.gif', pin: 'cyclohexylbenzene' },
]);
