/**
 * P-68.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds of the type a[ba]n are parent hydrides; they are discussed in P-21.2.3.1.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1026, P-68.4.2.1, example 4. [corrected 28 October 2016]
 *     For 1-methyl-3-phenyldithioxane (PIN)
 *     read methyl(phenyl)dithioxane (PIN)
 *   Page 1027, P-68.4.2.1, example 2 on this page. [corrected 5 July 2018]
 *     For (not oxydisulfanol)
 *     read [not oxybis(sulfanol)]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.2.1', [
  { formula: 'HS-O-SH', preselectedName: 'dithioxane' },
  { formula: 'CH3-S-O-SH', pin: 'methyldithioxane', notNames: ['methylsulfane-OS-thioperoxol'] },
  { formula: 'CH3-S-O-S-CH3', pin: 'dimethyldithioxane' },
  { formula: 'C6H5-S-O-S-CH3', pin: 'methyl(phenyl)dithioxane' },
  { formula: 'HS-O-S-OH', preselectedName: 'dithioxanol', notNames: ['hydroxysulfane-OS-thioperoxol'] },
  { formula: 'HO-S-O-S-OH', preselectedName: 'dithioxanediol', notNames: ['oxybis(sulfanol)'] },
]);
