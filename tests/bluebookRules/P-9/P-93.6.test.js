/**
 * P-93.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “COMPOUNDS COMPOSED OF RINGS AND CHAINS
 * In the construction of names of organic compounds, the first step is to form the name according to
 * the principles, rules, and conventions described in Chapters P-1 through P-8; in a second step,
 * stereodescriptors are added, in accordance with rules expressed in Chapter P-9. …
 * The configuration ‘R’ at ‘C-8’ is determined by applying Sequence Rule 4c, ‘r’ precedes ‘s’.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1282, P-93.6, example on this page. [corrected 12 September 2018]
 *     For (2R)-1-[(1r,4R)-4-methylcyclohexyl]-3-[(1s,4S)-4-methylcyclohexyl]propan-2-ol (PIN)
 *     read (2R)-1-[(1r,4S)-4-methylcyclohexyl]-3-[(1s,4S)-4-methylcyclohexyl]propan-2-ol (PIN)
 *     add (2R)-1-(cis-4-methylcyclohexyl)-3-(trans-4-methylcyclohexyl)propan-2-ol
 *     replace structure with:
 *   Page 1283, P-93.6, first digraph. [corrected 12 September 2018]
 *     Replace structure with:
 *     for simplified digraph to for the configuration ‘R’ at C-1.
 *     read simplified digraph for the configuration ‘S’ at C-1 (sequence rule 4b like > unlike).
 *   Page 1285, P-93.6, example 5. [modified 24 October 2018]
 *     For
 *     (2R)-2-bromo-2-(4-{(1E)-2-[(1E)-2-{4-[(1S)-1-carboxyethyl]phenyl}eth-1-en-1-yloxy]eth-1-en-1-yl}phenyl]propanoic
 *     acid
 *     read
 *     (2R)-2-bromo-2-{4-[(1E)-2-{[(1E)-2-{4-[(1S)-1-carboxyethyl]phenyl}ethen-1-yl]oxy}ethen-1-yl]phenyl}propanoic
 *     acid
 *     replace the structure with:
 *   Page 1285, P-93.6, Example 6. [modified 30 September 2020]
 *     For (2S)-2-(4-{(1Z)-2-[(1E)-2-{4-[(1S)-1-carboxyethyl]phenyl}ethenyloxy]ethenyl}phenyl)propanoic
 *     acid (PIN;
 *     read
 *     (2S)-2-{4-[(E)-2-{(Z)-2-{4-[(1S)-1-carboxyethyl]phenyl}ethen-1-yl]oxy}ethen-1-yl]phenyl}propanoic
 *     acid (PIN;
 */
import { noChecksYet } from '../support/checkRule.js';

// The Blue Book gives no examples here that the checks can read. Checks of the wording go here.
noChecksYet('P-93.6');
