/**
 * P-103.3.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Insertion of residues
 * In peptide nomenclature, the prefix ‘endo’ (nonitalic) is used to denote the insertion of an amino
 * acid residue in a well identified position in the peptide. For example, the name
 * endo-6a-alanine-bradykinin, or [endo-Ala⁶ᵃ]bradykinin, means that the amino acid residue ‘alanyl’
 * has been inserted between the positions 6 and 7 in the structure of bradykinin. The prefix ‘endo’ is
 * not to be confused with the recommended stereodescriptor ‘endo’ (written in italics) described in
 * P-93.5.2.2.1.
 * Multiple insertions, and insertion of a maximum of two residues, together in the same place in the
 * chain are shown by a logical extension of this recommendation. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.3.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103353a.gif', name: 'endo-6a-alanine-bradykinin' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103353b.gif', name: 'endo-1a-threonine,4a-valine,4b-glycine-bradykinin' },
]);
