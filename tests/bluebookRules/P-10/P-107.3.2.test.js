/**
 * P-107.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Configuration of phosphatidic acids
 * In order to designate the configuration of glycerol derivatives, the carbon atoms of glycerol are
 * numbered by a method referred to as ‘stereospecific numbering’. The carbon atom that appears on top
 * of that Fischer projection that shows a vertical carbon chain with the hydroxy group at carbon 2 to
 * the left is designated as C-1.
 * To differentiate such numbering from conventional numbering, which conveys no steric information,
 * the stereodescriptor ‘sn’ (for ‘stereospecifically numbered’) is used. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1433, P-107.3.2, line 9. [corrected 17 April 2019]
 *     For ...and the stereodescriptor ‘X’ may be used...
 *     read ...and the stereodescriptor ‘Ξ’ may be used...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107320a.gif', name: 'sn-glycerol 1-phosphate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107320b.gif', name: 'sn-glycerol 3-phosphate' },
]);
