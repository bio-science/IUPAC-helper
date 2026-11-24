/**
 * P-41
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “SENIORITY ORDER FOR CLASSES
 * The order of seniority of classes is given in Table 4.1. It ranks classes expressed by suffixes
 * (classes 1 through 20) and classes based on the senior atom in compounds (classes 21 through 43).
 * 1 Radicals
 * 2 Radical anions
 * 3 Radical cations
 * 4 Anions
 * 5 Zwitterions
 * 6 Cations
 * 7 Acids
 * 7a ‘Suffix’ acids in the order carboxylic (not including carbonic or polycarbonic acids, which
 * belong to sub-class ‘7b’), sulfonic, sulfinic, selenonic, seleninic, telluronic, tellurinic, each …
 * 7b Carbon acids with no substitutable hydrogen atoms in the order polynuclear carbonic acids
 * (tricarbonic acid, dicarbonic acid), then carbonic acid, and cyanic acid.
 * 7c Oxoacids having substitutable hydrogen atoms attached to their central atoms and their acidic
 * derivatives in the following decreasing order of seniority: azonic, azinic, phosphonic, phosphinic,
 * …
 * 7d Mononuclear and polynuclear oxoacids other than carbon acids without substitutable hydrogen atoms
 * attached to their central atom (see 7b, above), but which may be functionalized or may form …
 * 7e Other monobasic ‘oxoacids’ used as functional parent compounds.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 431, P-41, example 2. [corrected 3 June 2020]
 *     For (trimethylazaniumyl)acetate (PIN)
 *     read (N,N-dimethylmethanaminiumyl)acetate (PIN)
 *   Page 431, P-41, example 5. [corrected 3 June 2020]
 *     For (trisulfanyl)silane (preselected name;
 *     read trisulfanylsilane (preselected name;
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-41', [
  { formula: 'HOOC-CH2-CH2–', preferredPrefix: '2-carboxyethyl' },
  { formula: 'HO-CH2-CH2-CONH2', pin: '3-hydroxypropanamide' },
  { formula: 'OHC-CH2-CH2-CN', pin: '4-oxobutanenitrile' },
  { formula: 'HSSS-SiH3', name: 'trisulfanylsilane' },
  { formula: 'BH2-PH2', name: 'boranylphosphane' },
  { formula: '(CH3)4Si', pin: 'tetramethylsilane' },
  { formula: '(C6H5)3P', pin: 'triphenylphosphane' },
  { formula: 'CH3-O-CH2-S-CH3', pin: 'methoxy(methylsulfanyl)methane' },
  { formula: 'CH3-S-CH2-CH2-SO-CH3', pin: '1-(methanesulfinyl)-2-(methylsulfanyl)ethane' },
]);
