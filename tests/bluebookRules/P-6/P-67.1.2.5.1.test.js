/**
 * P-67.1.2.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Except for the boron acids and silicic acid, preferred IUPAC names of acid halides and
 * pseudohalides are formed by adding the class name(s) of a halide or pseudohalide to that of the
 * acid. Exceptionally, in accordance with tradition and the recommended nomenclature of inorganic
 * compounds (ref. …
 * Preferred IUPAC names of acid halides and pseudohalides derived from the boron acids and silicic
 * acid are formed on the basis of the parent hydride names borane and silane, respectively.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 927, P-67.1.2.5.1, example 1 on this page. [corrected 26 September 2018]
 *     For S(=NH-CH3)Cl2
 *     read S(=N-CH3)Cl2
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.5.1', [
  { formula: 'CH3-N(O)Cl2', pin: 'methylazonic dichloride' },
  { formula: 'P(O)(NCO)3', pin: 'phosphoryl triisocyanate' },
  { formula: '(C6H5)2P-Cl', pin: 'diphenylphosphinous chloride' },
  { formula: '(C6H5)2Sb-NCO', pin: 'diphenylstibinous isocyanate' },
  { formula: 'C6H5-PCl2', pin: 'phenylphosphonous dichloride' },
  { formula: 'C6H5-PBrCl', pin: 'phenylphosphonous bromide chloride', otherNames: ['phenylphosphonobromidous chloride'] },
  { formula: '(C6H5)2P(=N-C6H5)Cl', pin: 'N,P,P-triphenylphosphinimidic chloride' },
  { formula: '(CH3-CH2)2P(S)Cl', pin: 'diethylphosphinothioic chloride' },
  { formula: 'C6H5-P(O)Cl2', pin: 'phenylphosphonic dichloride' },
  { formula: 'CH3-CH2-P(O)[N(CH3)2]Cl', pin: 'P-ethyl-N,N-dimethylphosphonamidic chloride' },
  { formula: '(CH3)2N-P(O)(NCO)Cl', pin: 'N,N-dimethylphosphoramidisocyanatidic chloride' },
  { formula: 'HP(O)(NCO)2', pin: 'phosphonic diisocyanate' },
  { formula: 'P(=NH)(NCS)3', pin: 'phosphorimidic triisothiocyanate' },
  { formula: '(CH3)2PN3', pin: 'dimethylphosphinous azide' },
  { formula: 'SO2(NCO)2', pin: 'sulfuryl diisocyanate' },
  { formula: 'S(=N-CH3)Cl2', pin: 'N-methylsulfurimidous dichloride' },
  { formula: 'F-SO2-NCO', pin: 'sulfurisocyanatidic fluoride' },
  { formula: 'F-S(=NH)(NCO)', pin: 'sulfurimidisocyanatidous fluoride' },
  { formula: 'CH3-NH-SO2Cl', pin: 'N-methylsulfamoyl chloride' },
]);
