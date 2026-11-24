/**
 * P-93.3.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Trigonal pyramid
 * The configuration of molecules containing a trigonal pyramidal center (TPY-3) is described in a
 * similar way to that of tetrahedral centers (T-4) described above in P-92 (see IR-9.3.4.3, ref. 12).
 * The tetrahedral configuration is achieved by adding a phantom atom (0) to the central atom
 * perpendicular to the base of the pyramid. No configuration index is used with the ‘TPY-3’ symbol.
 * Priority numbers are ‘1 > 2 > 3 > 4’.
 * Traditionally, sulfoxides have been considered as a tetrahedral system composed of a central atom,
 * ligands, and a lone pair of electrons (or phantom atom). No polyhedral symbol is used.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.3.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93332c.gif', notNames: ['(T-4)-(methanesulfinyl)methane'] },
]);
