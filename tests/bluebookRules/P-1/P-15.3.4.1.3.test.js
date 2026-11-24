/**
 * P-15.3.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsymmetrically substituted component units:”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.4.1.3', [
  { pin: '4-{2-[2-(4-carboxyphenyl)-1-chloroethoxy]-1-chloroethyl}benzoic acid', notNames: ['4-{2-[2-(4-carboxyphenyl)-2-chloroethoxy]-2-chloroethyl}benzoic acid'] },
]);
