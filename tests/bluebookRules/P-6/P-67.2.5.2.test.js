/**
 * P-67.2.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Esters of polynuclear noncarbon oxoacids
 * Fully esterified polynuclear noncarbon oxoacids are named as neutral salts, except that names of
 * allowed groups (alkyl groups, aryl groups, etc.), cited in alphanumerical order
 * when more than one, replace the name of the cations. Partial (acid) esters of polybasic noncarbon
 * oxoacids and their salts are named by the procedures for neutral esters and acid salts, except that
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 959, P-67.2.5.2, example 4. [corrected 11 December 2023]
 *     For (CH3)2CH-O-SO-O-SO-O-CH(CH3)2 di(propan-2-yl) disulfite (PIN)
 *     read (CH3)2CH-O-SO-O-SO-O-CH(CH3)2 1,3-bis[(propan-2-yl)oxy]-1λ⁴,3λ-dithioxane-1,3-dione (PIN)
 *     [not di(propan-2-yl) disulfite, see P-67.3.2]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67252a.gif', pin: 'dimethyl thiohypodiphosphonite' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67252b.gif', pin: 'methyl hydrogen dithiohypodiphosphonite' },
  { formula: 'CH3-O-SO2-O-SO2-S-CH2-CH3', pin: 'S-ethyl O-methyl thiodisulfate' },
  { formula: '(CH3)2CH-O-SO-O-SO-O-CH(CH3)2', pin: '1,3-bis[(propan-2-yl)oxy]-1λ⁴,3λ⁴-dithioxane-1,3-dione', notNames: ['di(propan-2-yl) disulfite', 'see P-67.3.2'] },
  { formula: 'CH3-O-SO2-S-SO2-O-CH3', pin: 'O¹,O³-dimethyl thiodisulfate' },
]);
