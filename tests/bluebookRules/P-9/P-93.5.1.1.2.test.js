/**
 * P-93.5.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Achiral cyclic compounds
 * The configuration of achiral cyclic molecules is also specified by CIP stereodescriptors in
 * preferred IUPAC names. For the use of cis or trans see P-93.5.1.2.
 * (a) The configuration at pseudoasymmetric centers, for example, at ‘C-1’ and ‘C-4’ of
 * 1,4-disubstituted cyclohexanes, is specified by the methodology discussed in Example 2 in P-92.6.
 * (b) The achiral isomers of 1,2,3,4,5,6-hexasubstituted cyclohexane by identical substituents are
 * described below. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1242, P-93.5.1.1.2, line 2. [corrected 3 December 2025]
 *     Add For the use of cis or trans see P-93.5.1.2.
 *   Page 1243, P-93.5.1.1.2 (a), example 3 on this page. [modified 26 June 2019]
 *     For bis[(1r,4r)-4-methylcyclohexyl]-(1s,4s)-4-methylcyclohexylphosphane (PIN)
 *     read bis[(1r,4r)-4-methylcyclohexyl][(1s,4s)-4-methylcyclohexyl]phosphane (PIN)
 *     add (cis-4-methylcyclohexyl)bis(trans-4-methylcyclohexyl)phosphane
 *   Page 1243, P-93.5.1.1.2 (a) after example 3 on this page. [corrected 3 December 2025]
 *     Add
 *     (1r,4s)-4-chloro-1-methyl-4-propylcyclohexan-1-ol (PIN)
 *     1,4-cis-4-chloro-1-methyl-4-propylcyclohexan-1-ol
 *     Explanation. The CIP preferred group at both substitution positions are cis.
 *   Page 1243, P-93.5.1.1.2 (b), end of paragraph. [corrected 31 May 2023]
 *     Add The numbering for these examples is decided by application of criterion P-14.4 (j).
 *   Page 1244, P-93.5.1.1.2 (b), first example on this page, 3. [modified 31 May 2023]
 *     For 3 (1R,2s,3S,4R,5s,6S)
 *     read 3 (1R,2r,3S,4R,5s,6S)
 *     Note R > r > S > s [see P-14.4 (j)]
 *     replace the structure with:
 *   Page 1244, P-93.5.1.1.2 (b), second example on this page, 4, add after the name. [corrected 31 May
 *   2023]
 *     Add Note R > r > S > s [see P-14.4 (j)]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93511g.gif', name: 'cis-cyclohexane-1,4-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93511h.gif', name: 'trans-cyclohexane-1,4-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93511i.gif', name: 'trans-4-chloro-4-methylcyclohexan-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93511j.gif', pin: 'bis[(1r,4r)-4-methylcyclohexyl]phosphane', otherNames: ['bis(trans-4-methylcyclohexyl)phosphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93511k.gif', pin: 'bis[(1r,4r)-4-methylcyclohexyl][(1s,4s)-4-methylcyclohexyl]phosphane' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93511k2.gif', name: '1,4-cis-4-chloro-1-methyl-4-propylcyclohexan-1-ol' },
]);
