/**
 * P-101.3.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Methylene groups inserted into an atomic connector or into a terminal segment are identified by
 * adding a letter ‘a’, ‘b’, etc., to the locant of the highest numbered skeletal atom of the atomic
 * connector or terminal portion consistent with the location of double bonds remaining in the
 * structure. If there are equivalent atomic connectors, the highest atomic connector is chosen, and
 * the methylene group is inserted after the highest numbered skeletal atom in that connector.
 * Addition of acyclic side chains or extension of terminal portions of a side chain already attached
 * to the stereoparent hydride may also be done by principles of substitutive nomenclature. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322a.gif', name: 'pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322b.gif', name: '19a-homo-5β-pregnane', notNames: ['19-methyl-5β-pregnane'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322c.gif', name: '16a-homo-5α-pregnane' },
]);
