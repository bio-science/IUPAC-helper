/**
 * P-62.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “N-SUBSTITUTION OF AMINES AND IMINES BY HETEROATOMS
 * Traditionally, substitution on the nitrogen atom of amines and imines was allowed for all
 * characteristic groups cited as prefixes (see Table 5.1). This approach is maintained in these
 * recommendations, unless a higher class is formed that must be named in accordance with the seniority
 * of classes (see P-41).
 * This new rule is applied to prefixes such as Cl and other halogen atoms, –BrO and other acyl similar
 * groups, –NO, –NO2, –OR, –SO2-R, –SO-R, and even –OH groups and chalcogen analogues.
 * This is a change. In accordance with the seniority of classes (see P-41), compounds such as R-NH-Cl,
 * R-NH-NO, and R-NH-NO2 are now named as derivatives of amides (see P-67.1.2.6). …
 * Substitution of amines is permitted by –OR , –SR, –SeR, and –TeR groups, where R is an alkyl or aryl
 * substituent group.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 685, P-62.4, box, lines 3-5. [corrected 24 July 2019]
 *     For ...(see P-67.1.2.6) . Compounds such as R-NH-OH are named as N-derivatives of hydroxylamine,
 *     NH2-OH (see P-68.3.1.1.1). Names based on N-substitution of amines are not recommended in these
 *     cases.
 *     read ...(see P-67.1.2.6). Compounds such as R-NH-OH are named as N-derivatives of the senior
 *     amine (see P-68.3.1.1.1).
 *   Page 685, P-62.4, example 3. [corrected 7 April 2021]
 *     For N-ethylhypochlorous amide (PIN)
 *     read ethylhypochlorous amide (PIN)
 *   Page 685, P-62.4, example 3. [corrected 5 June 2019]
 *     For N-chloroethan-1-amine
 *     read N-chloroethanamine
 *   Page 685, P-62.4, example 4. [modified 21 April 2021]
 *     For N-methylnitrous amide (PIN)
 *     read methylnitrous amide (PIN)
 *     for (not N-nitrosomethanamine)
 *     read N-nitrosomethanamine
 *   Page 685, P-62.4, example 5. [modified 21 April 2021]
 *     For N-methyl-N-nitronitramide (PIN)
 *     read methyl(nitro)nitamide (PIN)
 *     for (not N,N-dinitromethanamine)
 *     read N,N-dinitromethanamine
 *   Page 685, P-62.4, example 6. [corrected 21 April 2021]
 *     For N-methylbromous amide (PIN)
 *     read methylbromous amide (PIN)
 *     for (not N-bromosylmethanamine)
 *     read N-bromosylmethanamine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.4', [
  { formula: 'CH3-CH2-NH-O-CH3', pin: 'N-methoxyethanamine' },
  { formula: 'CH3-CH2-NH-OH', pin: 'N-hydroxyethanamine', otherNames: ['N-ethylhydroxylamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620400a.gif', pin: 'ethylhypochlorous amide', otherNames: ['N-chloroethanamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620400b.gif', pin: 'methylnitrous amide', otherNames: ['N-nitrosomethanamine'] },
  { formula: 'CH3-N(NO2)2', pin: 'methyl(nitro)nitramide', otherNames: ['N,N-dinitromethanamine'] },
  { formula: 'CH3-NH-BrO', pin: 'methylbromous amide', otherNames: ['N-bromosylmethanamine'] },
]);
