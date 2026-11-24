/**
 * P-27.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Secofullerenes
 * The nondetachable prefix ‘seco’ indicates the cleavage of one fullerene bond. Numbering of the
 * parent fullerene is retained; where there is a choice, lowest possible locants are used to describe
 * the seco operation. The valence requirements of the resulting carbon atoms with a connectivity of
 * two are satisfied by hydrogen atoms following rearrangement of the double bonds. The hydrogen atoms
 * are implied in the name of the secofullerene. …
 * It would not be helpful to set a precise number of bonds that can be cleaved by the ‘seco’ operation
 * for preferred IUPAC names; …
 * The use of the ‘seco’ prefix in the nomenclature of natural products is not the same and must not be
 * used in, or adapted to, fullerene nomenclature.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270403a.gif', pin: '1,9-seco(C60-Ih)[5,6]fullerene' },
]);
