/**
 * P-75.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “IONIC AND RADICAL CENTERS IN DIFFERENT PARENT STRUCTURES
 * Radical centers have priority over ionic centers. A radical ion derived formally by the subtraction
 * of one or more hydrogen atom(s) from an ionic or zwitterionic compound in which the ionic and
 * radical centers cannot be included in the same parent structure is named by expressing the ionic
 * center(s), or the part of the structure containing the ionic center(s), by means of substituent
 * prefixes attached to the name of the parent radical.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75400b.gif', pin: 'ethoxy(oxido)(phenyl)methyl', otherNames: ['α-ethoxy-α-oxidobenzyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P75400c.gif', pin: '1,5-bis(3-ethyl-1,3-benzothiazol-3-ium-2-yl)penta-1,4-dien-3-yl' },
]);
