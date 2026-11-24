/**
 * P-23.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When there is a choice for numbering, low locants are assigned to heteroatoms with nonstandard
 * bonding numbers expressed by the λn symbol in order of decreasing numerical value of the bonding
 * number; for example, in the case of arsenic, the lower locant is given to a λ⁵ arsenic atom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230602a.gif', pin: '2λ⁵,3-diarsabicyclo[2.2.1]heptane' },
]);
