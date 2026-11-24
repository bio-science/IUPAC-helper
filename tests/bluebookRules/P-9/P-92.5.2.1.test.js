/**
 * P-92.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Methodology for pairing ligands
 * A new methodology has recently been described by Mata and Lobo (ref. 41) to replace that described
 * by Prelog and Helmchen (see subsection 5.4, ref. 36). The rule for pairing stereodescriptors is as
 * follows: A reference descriptor for chirality centers, identified as R or S (not associated with any
 * node of the digraph and designated here with a bold font), is chosen in each ligand and is:
 * (a) the one associated with the highest rank node corresponding to a chiral unit in the ligand;
 * (b) the one that occurs the most in the set of equivalent highest rank nodes; or
 * (c) sequentially both descriptors (R and S), if these occur in the same number in the set of
 * equivalent highest ranked nodes:
 * (i) If the number of reference descriptors is different in both ligands then the ligand with one
 * reference descriptor has priority over the one with two reference descriptors;
 * (ii) If both ligands have the same number of reference descriptors, then the reference descriptor is
 * paired with each one of the descriptors, identified as R or S, associated with nodes corresponding …
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1201, P-92.5.2.1, example 5. [modified 10 April 2019]
 *     For
 *     (2R,3R,5R,7R,8R)-4.4-bis[(2S,3R)-3-chlorobutan-2-yl]-6,6-bis[(2S,4S)-3-chlorobutan-2-yl)]-2,8-dichloro-3,7-dimethylnonan-5-ol
 *     (PIN; ...
 *     read
 *     (2R,3R,5R,7R,8R)-2,8-dichloro-4,4-bis[(2S,3R)-3-chlorobutan-2-yl]-6,6-bis[(2S,3S)-3-chlorobutan-2-yl]-3,7-dimethylnonan-5-ol
 *     (PIN; ...
 *     delete CH4 from structure
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92521a.gif', name: 'simplified digraph' },
]);
