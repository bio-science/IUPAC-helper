/**
 * P-92.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “SEQUENCE RULE 5: ‘R’ precedes ‘S’, ‘M’ precedes ‘P’, and ‘seqCis’ precedes ‘seqTrans’, and
 * similarly for auxiliary descriptors.
 * In preferred IUPAC names the lower case stereodescriptors ‘r’ and ‘s’ are used to describe
 * pseudoasymmetric centers, and ‘m’ and ‘p’ describe axial or planar pseudoasymmetry. …
 * Explanation: The configurations at ‘C-2’ and ‘C-4’ are determined by applying Sequence Rule 1. The
 * configuration ‘r’ at ‘C-3’ is arrived at in accordance with the sequence ‘S > C-2 > C-4 > H’.
 * Explanation: The following digraph specifies the configuration ‘r’ for ‘C-1’, in accord with the
 * rule ‘R’ precedes ‘S’. In the same way, configuration ‘r’ at C-3 is determined. …
 * Explanation: The configurations at ‘C-3’ and ‘C-5’ are determined by applying Sequence Rule 1. …
 * Explanation: The configurations for ‘X’ and ‘Y’ are determined by applying Sequence Rule 1. …
 * Explanation: ‘The configurations at ‘C-4’ and for the side chain are determined by applying Sequence
 * Rule 1. …
 * Explanation: First, the molecule is arbitrarily renumbered as above: Then, the ligands are analyzed
 * by Sequence Rule 4b and Sequence Rule 1 is applied, leading to the specification of eight chirality
 * …
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1205, P-92.6, title. [corrected 2 September 2020]
 *     For ...and ‘seqCis’ precedes ‘seqTrans’.
 *     read ...and ‘seqCis’ precedes ‘seqTrans’, and similarly for auxiliary descriptors.
 *   Page 1206, P-92.6, Example 2, digraph. [corrected 3 December 2025]
 *     Replace by
 *   Page 1208, P-92.6, Example 6. [modified 11 November 2020]
 *     For
 *     (1s)-1-{[(1R,2R)-1,2-dichloropropyl][(1S,2R)-1,2-dichloropropyl]amino}-1-{[(1R,2S)-1,2-dichloropropyl][(1S,2S)-1,2-dichloropropyl]amino}methan-1-ol
 *     read
 *     (s)-{[(1R,2R)-1,2-dichloropropyl][(1S,2R)-1,2-dichloropropyl]amino}{[(1R,2S)-1,2-dichloropropyl][(1S,2S)-1,2-dichloropropyl]amino}methanol
 *     replace the structure with:
 *   Page 1209, P-92.6, Example 6, last paragraph on this page line 6. [corrected 2 September 2020]
 *     For ...ranking node 8 is 'S in 'branch B';...
 *     read ..ranking node 14 is 'S in 'branch B';...
 *   Page 1209, P-92.6, Example 6, Table at bottom of page, Branch B. [modified 2 September 2020]
 *     For 8-'S' (first difference encountered)
 *     read 14-'S' (first difference encountered)
 *     for 14-'R'
 *     read 8-'S'
 *   Page 1209, P-92.6, example 6 (cont’d), Branch B, last line. [corrected 2 January 2019]
 *     For 14-‘R’
 *     read 14-‘S’
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.6', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92600c.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92600i.gif', name: 'reference descriptor' },
]);
