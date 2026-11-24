/**
 * P-68.1.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Suffix nomenclature
 * Suffixes, when available, are used to denote characteristic groups; prefixes are not recommended.
 * Suffixes containing a carbon atom generate preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 973, P-68.1.5.1, example 3. [corrected 11 March 2020]
 *     For hydroxydimethylthallane
 *     read hydroxydi(methyl)thallane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.5.1', [
  { formula: 'H2B-CN', pin: 'boranecarbonitrile' },
  { formula: '(HO)2B-B(OH)2', preselectedName: 'hypodiboric acid', otherNames: ['diborane(4)tetrol'], notNames: ['tetrahydroxydiborane(4)'] },
  { formula: '(CH3)2Tl-OH', name: 'dimethylthallanol' },
  { formula: '(CH3)2Tl-O⁻ Na⁺', name: 'sodium dimethylthallanolate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68151a.gif', pin: '2,4,8,10-tetraoxa-3,9-diboraspiro[5.5]undecane-3,9-diol' },
]);
