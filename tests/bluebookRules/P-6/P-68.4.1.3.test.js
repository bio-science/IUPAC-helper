/**
 * P-68.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the chain of identical chalcogen atoms is terminated by one or two acyl groups the compound is
 * named as a pseudoketone (see P-64.1.2.1, P-64.3 and P-65.7.5.1) on the basis of the preferred
 * carbonyl component. Multiplicative nomenclature is used if the principles for its use are met.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1026, P-68.4.1.3, example 4. [corrected 27 March 2019]
 *     Delete 1-(acetylpentathio)propan-1-one
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.1.3', [
  { formula: 'CH3-CH2-CO-O-O-OH', pin: '1-trioxidanylpropan-1-one', otherNames: ['1-hydrotrioxypropan-1-one'] },
  { formula: 'CH3-CH2-CO-S-S-S-CO-CH2-CH3', pin: '1,1′-trisulfanediyldi(propan-1-one)', otherNames: ['1,1′-trithiodi(propan-1-one)'] },
  { formula: 'CH3-CH2-CO-Se-Se-Se-CH3', pin: '1-(methyltriselanyl)propan-1-one', otherNames: ['1-(methyltriseleno)propan-1-one'], notNames: ['Se-methyldiselanyl propaneselenoate', 'a pseudoester'] },
  { formula: 'CH3-CH2-CO-S-S-S-S-S-CO-CH3', pin: '1-(acetylpentasulfanyl)propan-1-one' },
]);
