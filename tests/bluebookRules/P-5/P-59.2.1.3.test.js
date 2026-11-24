/**
 * P-59.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the principal group occurs in two or more carbon chains that are not attached to one another
 * (that is, do not together form a continuous or branched chain but are separated by, for instance, a
 * ring or a heteroatom), and when multiplicative nomenclature is not possible, then the chain carrying
 * the largest number of the principal groups is chosen as the parent hydride for nomenclature; …
 * Example 2: In the following example, the longest chain is chosen as parent hydride, in accord with
 * the criteria for selecting the principal chain.
 * Explanation: A multiplicative name is formed when identical parent structures are attached
 * symmetrically to a central component (for a preferred IUPAC name the parent structures must be
 * symmetrically …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 634, P-59.2.1.3, Example 1 Functionalized parent hydride. [corrected 29 January 2020]
 *     For ethanediol
 *     read ethane-1,2-diol
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.1.3', [
  { pin: '1-[4-(3-hydroxypropyl)phenyl]ethane-1,2-diol' },
  { pin: '3-[4-(2-hydroxyethyl)phenyl]propan-1-ol' },
  { pin: '3,3′-(1,4-phenylene)di(propan-1-ol)' },
]);
