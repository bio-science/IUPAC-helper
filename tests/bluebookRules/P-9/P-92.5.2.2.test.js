/**
 * P-92.5.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Application of the methodology in P-92.5.2.1 is illustrated by the following examples; the criteria
 * in P-92.5.2.1 are applied in the order (a), (b), (c), (i), and (ii) as required. Examples 1 through
 * 4 are related to criterion (a); example 5 to criterion (b); example 6 to subcriterion (i) following
 * (c). Example 6 in P-92.6 illustrates criterion (c).
 * Explanation: In this example, the configuration at ‘C-2’, ‘C-3’, ‘C-5’, and ‘C-6’ is determined by
 * the ranking of the ligands by Sequence Rule 1. …
 * Explanation: In this example, the configuration at ‘C-2’, ‘C-3’, ‘C'-5’, and ‘C-6’ is determined by
 * application of Sequence Rule 1. …
 * Example 3.
 * Explanation: This example illustrates the use of reference descriptors and that of auxiliary
 * descriptors, R0 and S0, specified in place of usual stereodescriptors R and S as described by Prelog
 * and …
 * Explanation: First, the structure is renumbered as shown above. Then, the configurations at ‘C-2’,
 * ‘C-3’, ‘C-9’, ‘C-10’, ‘C-13’, ‘C-14’, ‘C-17’, and ‘C-18’ are determined by the ranking of the …
 * This example illustrates the application of criterion (b) of the rule described in P-92.5.2.1.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1198, P-92.5.2.2, Example 2, Explanation, line 7. [corrected 2 September 2020]
 *     For ... ‘u’. like pairs being ‘RR’ or ‘SS’, unlike pairs...
 *     read ...‘u’, like pairs being ‘RR’ or ‘SS’, unlike pairs...
 *   Page 1199, P-92.5.2.2, Example 3, simplified digraph. [corrected 2 September 2020]
 *     Replace the structure with:
 *   Page 1199, P-92.5.2.2, Example 3, Explanation, lines 2/3. [corrected 2 September 2020]
 *     For ...auxiliary descriptors specified in place of usual stereodescriptors R and S as
 *     described...
 *     read ...auxiliary descriptors, R0 and S0, specified in place of usual stereodescriptors R and S
 *     as described...
 *   Page 1199, P-92.5.2.2, Example 3, Explanation, line 5. [corrected 2 September 2020]
 *     For ...auxiliary descriptors (R0 and S0). The methodology...
 *     read ...auxiliary descriptors (R0 and S0) illustrated here for C-1. The auxiliary descriptors
 *     for every node are determined for this digraph. For example, the auxiliary descriptor for C-6
 *     node is R0 as Cl > C-1 > C-5 > H. Once all necessary auxiliary descriptors are assigned, the
 *     methodology...
 *   Page 1204, P-92.5.2.2, Example 6.. [corrected 12 May 2021]
 *     For
 *     (2R)-2-{bis[(1R)-1-hydroxyethyl]amino}{[(1R)-1-hydroxyethyl]-2-[(1S)-1-hydroxyethyl]amino}acetic
 *     acid (PIN)
 *     read (R)-{bis[(1R)-1-hydroxyethyl]amino}{[(1R)-1-hydroxyethyl][(1S)-1-hydroxyethyl]amino}acetic
 *     acid (PIN)
 */
import { noChecksYet } from '../support/checkRule.js';

// The Blue Book gives no examples here that the checks can read. Checks of the wording go here.
noChecksYet('P-92.5.2.2');
