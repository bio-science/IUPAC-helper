/**
 * P-15.3.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsymmetrical substituent groups consisting of two or more different components:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 87, P-15.3.4.1.1, example (1). [modified 30 January 2019]
 *     For 1-[(disilanylmethyl)peroxy]disilane (PIN)
 *     read [(disilanylmethyl)peroxy]disilane (PIN)
 *     for [not (disilanylperoxy)methyl]disilane;
 *     read [not [(disilanylperoxy)methyl]disilane;
 *   Page 87, P-15.3.4.1.1 example (3). [modified 6 May 2020]
 *     For 1-{[2-(disilan-1-yloxy)ethyl]sulfanyl}disilane
 *     read {[2-(disilanyloxy)ethyl]sulfanyl}disilane
 *     for [not 1-{[2-(disilan-1-ylsulfanyl)ethoxy}disilane;
 *     read [not [2-(disilanylsulfanyl)ethoxy]disilane;
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.4.1.1', [
  { notNames: ['[(disilanylperoxy)methyl]disilane'] },
  { pin: '4-[(4-hydroxyanilino)methyl]phenol', notNames: ['4-{[(4-hydroxyphenyl)methyl]amino}phenol'] },
  { pin: '3-oxa-6-thia-1,2,7,8-tetrasilaoctane', otherNames: ['{[2-(disilanyloxy)ethyl]sulfanyl}disilane'], notNames: ['[2-(disilanylsulfanyl)ethoxy]disilane'] },
]);
