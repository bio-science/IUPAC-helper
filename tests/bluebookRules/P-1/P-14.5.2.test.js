/**
 * P-14.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The name of a prefix for a substituent is considered to begin with the first letter of its complete
 * name.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405g.gif', pin: '7-(1,2-difluorobutyl)-5-ethyltridecane', notNames: ['5-ethyl-7-(1,2-difluorobutyl)tridecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405h.gif', pin: '7-(2,4-dimethylpentyl)-5-ethyltridecane' },
]);
