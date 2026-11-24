/**
 * P-103.3.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Removal of residues
 * The subtractive prefix ‘des’, in peptide nomenclature, is used to denote the removal of an amino
 * acid residue from any position in a peptide structure. For example, the name
 * des-8-phenylalanine-bradykinin means that the amino-acid residue ‘phenylalanyl’, located in position
 * 8 of the peptide bradykinin, has been removed; or in the abbreviated form des-Phe⁸-bradykinin. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.3.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103354a.gif', name: 'des-7-proline-oxytocin' },
]);
