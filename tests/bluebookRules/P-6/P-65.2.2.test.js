/**
 * P-65.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyanic acid
 * Cyanic acid is the retained name for NC-OH. The functional replacement name based on carbonic acid
 * would be carbononitridic acid, but this name has not been used and, although systematic, is only
 * recommended for general nomenclature. Cyanic acid is classified as an acid, thus generating
 * anhydrides (see P-65.7.2) and esters (see P-65.6.3.2).
 * Preferred prefixes derived from cyanic acid are ‘cyano’ for –CN and ‘cyanato’ for –O-CN,
 * ‘thiocyanato’ for –S-CN, ‘selenocyanato’ for –Se-CN, and ‘tellurocyanato’ for –Te-CN. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 784, P-65.2.2, example 1. [corrected 19 September 2018]
 *     For carbononitridothioic
 *     read carbononitridothioic acid
 *   Page 785, P-65.2.2, example 1 on this page. [corrected 18 September 2019]
 *     For carbonitridoylacetic acid
 *     read carbononitridoylacetic acid
 *   Page 785, P-65.2.2, example 2 on this page. [corrected 6 March 2019]
 *     For 3-carbonitridothioylpropanoic acid
 *     read 3-(carbononitridoylthio)propanoic acid
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.2', [
  { formula: 'NC-SH', pin: 'thiocyanic acid', otherNames: ['carbononitridothioic acid'] },
  { formula: 'NC-S–', preferredPrefix: 'thiocyanato' },
  { formula: 'NC-OOH', pin: 'peroxycyanic acid', otherNames: ['carbononitridoperoxoic acid'] },
  { formula: 'NC-OO–', preferredPrefix: 'cyanoperoxy' },
  { formula: 'NC-SS-H', pin: 'dithioperoxycyanic acid', otherNames: ['carbononitrido(dithioperoxoic) acid'] },
  { formula: 'NC-SS–', preferredPrefix: 'cyanodisulfanyl' },
  { formula: 'NC-CH2-COOH', pin: 'cyanoacetic acid', otherNames: ['carbononitridoylacetic acid'] },
  { formula: 'NC-S-CH2-CH2-COOH', pin: '3-(thiocyanato)propanoic acid', otherNames: ['3-(carbononitridothio)propanoic acid'] },
]);
