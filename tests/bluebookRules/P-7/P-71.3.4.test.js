/**
 * P-71.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A radical derived formally by the removal of the hydrogen atom of a hydroxy group (or chalcogen
 * analogue) of an acid or hydroxy characteristic group is named in two ways:
 * (1) additively, using the term ‘oxyl’ or ‘peroxyl’ derived from the terms ‘oxy’ or ‘peroxy’ (not
 * dioxy);
 * (2) by substituting the parent radicals ‘oxidanyl’ (preselected name), for HO•, or ‘dioxidanyl’
 * (preselected name), for HOO•, by the appropriate substituent groups.
 * The names methoxyl, ethoxyl, propoxyl, butoxyl, tert-butoxyl, phenoxyl, and aminoxyl, which may be
 * considered as contractions of the systematically formed names, such as methanyloxyl or methyloxyl,
 * are retained and are preferred IUPAC names (see P-63.2.2.2 for names such as methoxy, ethoxy, etc.).
 * Method (1) generates preferred IUPAC names.
 * Chalcogen analogues are named on the basis of preselected parent radical names, such as ‘sulfanyl’,
 * ‘selanyl’, ‘disulfanyl’, etc.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.3.4', [
  { formula: 'CH3-O•', pin: 'methoxyl', otherNames: ['methyloxidanyl'] },
  { formula: 'ClCH2-CO-O•', pin: '(chloroacetyl)oxyl', otherNames: ['chloroacetoxyl', '(chloroacetyl)oxidanyl'] },
  { formula: 'H2N-O•', preselectedName: 'aminoxyl' },
  { formula: '(ClCH2)2N-O•', pin: 'bis(chloromethyl)aminoxyl', otherNames: ['[bis(chloromethyl)amino]oxidanyl'] },
  { formula: 'CH3-[CH2]4-CO-O-O•', pin: 'hexanoylperoxyl', otherNames: ['hexanoyldioxidanyl'] },
  { formula: 'CH3-[CH2]3-O•', pin: 'butoxyl', otherNames: ['butyloxidanyl'] },
  { formula: 'CH3-[CH2]2CO-O•', pin: 'butanoyloxyl', otherNames: ['butanoyloxidanyl'] },
  { formula: 'C6H5-S•', pin: 'phenylsulfanyl', notNames: ['benzenesulfenyl'] },
  { formula: 'CH3-Se•', pin: 'methylselanyl' },
  { formula: 'CH3-C(CH3)2-SS•', pin: 'tert-butyldisulfanyl' },
]);
