/**
 * P-66.5.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitriles corresponding to carbonic acid and di- and polycarbonic acids are named by functional
 * class nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.3.1', [
  { formula: 'NC-CO-CN', pin: 'carbonyl dicyanide', otherNames: ['2-oxopropanedinitrile'], notNames: ['oxomalononitrile'] },
  { formula: 'NC-CO-CO-CN', pin: 'oxalyl dicyanide', otherNames: ['2,3-dioxobutanedinitrile'] },
  { formula: 'NC-C(=NH)-CN', pin: 'carbonimidoyl dicyanide', notNames: ['2-iminopropanedinitrile'] },
  { formula: 'NC-C(=NNH2)-CN', pin: 'carbonohydrazonoyl dicyanide', notNames: ['2-hydrazonopropanedinitrile'] },
  { formula: 'H2N-CO-CN', pin: 'carbamoyl cyanide' },
  { formula: 'NC-CO-O-CO-CN', pin: 'dicarbonic dicyanide' },
]);
