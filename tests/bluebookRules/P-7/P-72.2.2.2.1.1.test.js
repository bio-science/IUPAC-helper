/**
 * P-72.2.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name of anions formed by the removal of a hydron from the chalcogen atom (O, S,
 * Se, and Te) of an acid or peroxyacid characteristic group or functional parent compound is formed by
 * replacing the ‘ic acid’ or ‘ous acid’ ending of the acid name by ‘ate’ or ‘ite’, respectively. Names
 * of acids are described in Sections P-65 and P-67.
 * This is a change from recommendation RC-83.1.6 (ref. 3) in which peroxyacids and their chalcogen
 * analogues modified by functional replacement were named on the basis of an anionic parent hydride.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1070, P-72.2.2.2.1.1, example 2 on this page. [corrected 28 October 2016]
 *     For ethane-OS-(thioperoxoate) (PIN)
 *     read ethane(OS-thioperoxoate) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.2.2.1.1', [
  { formula: 'CH3CO-O⁻', pin: 'acetate' },
  { formula: 'CH3-CH2-CO-O-O⁻', pin: 'propaneperoxoate' },
  { formula: 'CH3-CS-O-O⁻', pin: 'ethaneperoxothioate' },
  { formula: 'CH3-CO-O-S⁻', pin: 'ethane(OS-thioperoxoate)', notNames: ['acetoxysulfanide'] },
  { formula: 'CH3-CH2-CO-S⁻ ↔ CH3-CH2-CS-O⁻', pin: 'propanethioate' },
  { formula: 'CH3-CO-S⁻ ↔ CH3-CS-O⁻', pin: 'ethanethioate' },
  { formula: 'C6H5-SO2-O⁻', pin: 'benzenesulfonate' },
  { formula: '(C6H5-CH2)2P-O⁻', pin: 'dibenzylphosphinite' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222a.gif', pin: 'pyridine-2,6-dicarboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222b.gif', pin: '1H-pyrrole-2-carboximidate' },
]);
