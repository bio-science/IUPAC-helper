/**
 * P-103.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups with the free valence on a nitrogen atom
 * Substituent groups with the free valence on a nitrogen atom of an α-amino carboxylic acid formed by
 * the removal of a hydrogen atom from the amino group of an amino acid may be named by changing the
 * ending ‘e’ of the name of the α-amino acid into ‘o’, by adding the letter ‘o’ to tryptophan and by
 * constructing the names asparto and glutamo, from aspartic acid and glutamic acid, respectively.
 * When there is more than one nitrogen atom in the amino acid, the use of a locant of the form ‘Nx’ is
 * recommended.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1401, P-103.2.2.2, last example on this page. [corrected 17 April 2019]
 *     For (4-amino-5-carboxypentyl)amino
 *     read (5-amino-5-carboxypentyl)amino
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.2.2', [
  { formula: '–HN-CH2-COOH', name: 'glycino' },
  { formula: '–HN-[CH2]4-CH(NH2)-COOH', name: 'N⁶-lysino' },
  { formula: '–HN-C(=NH)-NH-[CH2]3-CH(NH2)-COOH', name: 'Nω-arginino' },
  { formula: '–HN-CO-[CH2]2-CH(NH2)-COOH', name: 'N⁵-glutamino' },
]);
