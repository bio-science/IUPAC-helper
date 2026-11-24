/**
 * P-66.5.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitriles with an α-oxo group.
 * Compounds of the type R-CO-CN can be named as acyl cyanides in a way similar to acid halides. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.3.1', [
  { formula: 'HCO-CN', pin: 'formyl cyanide', otherNames: ['oxoacetonitrile'] },
  { formula: 'CH3-CO-CN', pin: 'acetyl cyanide', otherNames: ['2-oxopropanenitrile'] },
  { formula: 'CH3-[CH2]5-CO-CN', pin: 'heptanoyl cyanide', otherNames: ['2-oxooctanenitrile'] },
  { formula: 'NC-CO-CO-CN', pin: 'oxalyl dicyanide', otherNames: ['2,3-dioxobutanedinitrile'] },
]);
