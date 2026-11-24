/**
 * P-46.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain contains the greater number of (R)-chirality centers.
 * Note: The configuration at C-5 (method 2) or C-1 (method 1) cannot be given because the attached
 * substituent is unknown. …
 * Continued with P-5 Selecting Preferred IUPAC Names and Constructing Names of Organic Compounds.
 * Return to:
 * IUPAC Chemical Nomenclature home page.
 * Blue Book home page.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 551, P-46.3.2, Note lines 4/5. [corrected 3 January 2020]
 *     For ...and a ‘s’ configuration...
 *     read ...and an ‘s’ configuration...
 *   Page 551, P-46.3.2, example 2. [modified 22 January 2020]
 *     Add (2) [(2R,5s,8S)-2,8-dichloro-5-methylnonan-5-yl]trimethylsilane (PIN)
 *     (1) {(1s,4R)-4-chloro-1-[(3S)-3-chlorobutyl]-1-methylpentyl}trimethylsilane
 *     Replace the structures with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.3.2', [
  { preferredPrefix: '(2R,8S)-2,8-dichloro-5-methylnonan-5-yl' },
  { pin: '[(2R,5s,8S)-2,8-dichloro-5-methylnonan-5-yl]trimethylsilane', otherNames: ['{(1s,4R)-4-chloro-1-[(3S)-3-chlorobutyl]-1-methylpentyl}trimethylsilane'] },
]);
