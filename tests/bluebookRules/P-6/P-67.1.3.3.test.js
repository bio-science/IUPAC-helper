/**
 * P-67.1.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anhydrides of mononuclear noncarbon oxoacids
 * Neutral anhydrides formed between acids named by suffixes and mononuclear noncarbon oxoacids
 * described in P-67.1.1 are named in the same way as described for anhydrides derived from carboxylic
 * and the sulfur acids named by suffixes (see P-65.7). The names of the acids are cited in
 * alphabetical order followed by the class name ‘anhydride’ prefixed by a numerical term indicating
 * the number of anhydride linkages (the numerical prefix mono is not used); such names lead to
 * preferred IUPAC names. …
 * Acidic anhydrides are named as described in P-67.3.1 using the senior acid as parent, or by using
 * systematic substitutive nomenclature.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.3.3', [
  { formula: '(CH3)2B-O-CO-CH3', pin: 'acetic dimethylborinic anhydride' },
  { formula: 'CH3-CO-O-As(O)(CH3)2', pin: 'acetic dimethylarsinic anhydride', otherNames: ['acetyl dimethylarsinate'] },
  { formula: 'B(O-CO-CH3)3', pin: 'acetic boric trianhydride' },
  { formula: '[(CH3)2CH]2Sb-S-C(S)-N(CH2-CH3)2', pin: 'diethylcarbamothioic di(propan-2-yl)stibinous thioanhydride' },
  { formula: 'C6H5-CO-O-I', pin: 'benzoic hypoiodous anhydride' },
  { formula: '(CH3)2B-O-O-B(CH3)2', pin: 'dimethylborinic peroxyanhydride' },
  { formula: 'B(OCN)3', pin: 'boric cyanic trianhydride' },
  { formula: 'CH3-HP(O)(OCN)', pin: 'cyanic methylphosphinic anhydride' },
]);
