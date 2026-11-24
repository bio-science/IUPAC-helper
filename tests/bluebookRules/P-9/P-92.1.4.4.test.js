/**
 * P-92.1.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mancude rings and ring systems
 * Mancude rings, i.e., rings or ring systems having the maximum number of noncumulative double bonds,
 * are treated as Kekulé structures. For mancude heterocycles, each duplicate atom is given an atomic
 * number that is the mean of what it would have if the double bonds were located at each of the
 * possible positions. For mancude hydrocarbons, it is immaterial which Kekulé structure is used
 * because ‘splitting’ the double bonds gives the same result in all cases.
 * The atomic number 6 is always present, as exemplified for a phenyl group:
 * And for an example involving nitrogen atoms
 * Explanation: ‘C-1’ is doubly bonded to one or the other of the nitrogen atoms and never to carbon,
 * so its added duplicate atom has an atomic number of 7 (that of nitrogen). …
 * Explanation: Five different Kekulé structures should be considered for the right hand ligand for
 * each carbon atom in the ring. For four of them they are doubly bonded to another carbon atom; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.1.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92144c.gif', pin: '3-[(S)-(cyclopenta-1,4-dien-1-yl)(hydroxy)methyl]cyclopenta-2,4-dien-1-ide' },
]);
