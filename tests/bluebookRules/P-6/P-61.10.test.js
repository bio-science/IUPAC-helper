/**
 * P-61.10
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “FULMINATES AND ISOFULMINATES
 * The structure of fulminic acid was indicated in the 1979 Recommendations (Rule C-833.1, ref. 1) and
 * in the 1993 Recommendations (Rule R-5.7.9.2, ref. 2) as HO-N≡C, and its derivatives were denoted by
 * the class name fulminate and the prefix fulminato. Although consistent with the pseudohalogen
 * cyanate, the structure of this acid in the literature is claimed to be HCNO. …
 * This is a change from the potentially ambiguous names fulminate and fulminato in previous
 * recommendations to systematic substitutive names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 666, P-61.10, example 3. [corrected 24 July 2019]
 *     For λ²-methylidenehydroxylamine (PIN)
 *     read λ²-methylidenehydroxylamine
 *     add N-hydroxy-λ²-methanimine (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.10', [
  { formula: 'H-C≡N=O', pin: 'formonitrile oxide' },
  { formula: '–C≡N=O', notNames: ['isofulminato'] },
  { formula: 'HO-N=C', pin: 'N-hydroxy-λ²-methanamine', otherNames: ['λ²-methylidenehydroxylamine'] },
  { formula: '–O-N=C', notNames: ['fulminato'] },
]);
