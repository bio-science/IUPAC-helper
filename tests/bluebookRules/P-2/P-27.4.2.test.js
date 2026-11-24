/**
 * P-27.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Norfullerenes
 * The nondetachable prefix ‘nor’ describes the deletion of one carbon atom from a fullerene structure;
 * however, bonds attached to the atom removed are not reconnected as is the case in the nomenclature
 * of natural products (see P-101.3.1.1). As a result, the connectivity of remaining atoms may be
 * reduced from three to two, which requires the presence of hydrogen atoms. An even number of hydrogen
 * atoms is implied in the name; …
 * It would not be helpful to set a precise number of carbon atoms that can be removed by the ‘nor’
 * operation for preferred IUPAC names; …
 * The use of the ‘nor’ prefix in the nomenclature of natural products is not the same and must not be
 * used in, or adapted to, fullerene nomenclature.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270402a.gif', pin: '1,9-dinor(C60-Ih)[5,6]fullerene' },
]);
