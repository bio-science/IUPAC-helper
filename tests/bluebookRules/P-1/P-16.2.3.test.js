/**
 * P-16.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Colons and semicolons
 * Colons separate related sets of locants; if a higher level of separation is required, semicolons are
 * used.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.3', [
  { pin: 'benzo[1′′,2′′:3,4;4′′,5′′:3,4]dicyclobuta[1,2-b:1′,2′-c′]difuran' },
  { pin: '1¹,2¹:2²,3¹-tercyclopropane' },
]);
