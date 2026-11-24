/**
 * P-13.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By replacement (‘a’) prefixes representing the element being introduced. This type of replacement
 * is called ‘skeletal replacement’. The most common type of replacement in the nomenclature of organic
 * compounds is replacement of carbon atoms by one or more of the following elements: O, S, Se, Te, N,
 * P, As, Sb, Bi, Si, Ge, Sn, Pb.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302a.gif', pin: 'cyclotetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302b.gif', pin: 'silacyclotetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302c.gif', pin: 'cyclopenta[cd]pentalene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302d.gif', pin: '1,2,3,4,5,6-hexaazacyclopenta[cd]pentalene' },
]);
