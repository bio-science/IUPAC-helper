/**
 * P-27.4.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Combination of structure-modifying operations
 * When more than one operation has been performed in a fullerene structure, the prefixes designating
 * these operations are cited in names in the order ‘cyclo’, ‘seco’, ‘homo’, and ‘nor’ in front of the
 * name of the fullerene. This is the reverse order that the operation indicated by the prefix has for
 * assignment of lowest locants. …
 * It would not be helpful to set a precise number of operations that can be performed on a parent
 * fullerene structure for generation of preferred IUPAC names; …
 * The rules for combinations of structure-modifying prefixes used in the nomenclature of natural
 * products are not the same and must not be used in, or adapted to, fullerene nomenclature.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.4.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270405a.gif', pin: '2H-2,9-cyclo-1-nor(C60-Ih)[5,6]fullerene' },
]);
