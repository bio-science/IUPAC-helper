/**
 * P-56.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “THE SUFFIXES ‘SO-THIOPEROXOL’, AND CHALOGEN ANALOGUES
 * The suffix ‘sulfenic acid’ and its chalcogen analogues were discarded in the 1993 recommendations
 * (ref. 2). In these recommendations, these suffixes are replaced by the new suffixes,
 * ‘SO-thioperoxol’, ‘SeO-selenoperoxol’, ‘dithioperoxol’, ‘TeS-tellurothioperoxol’, ‘diselenoperoxol’,
 * ‘SeTe-selenotelluroperoxol’ and ‘TeSe-telluroselenoperoxol’ (see P-63.4.2.1).
 * The suffixes SO-thioperoxol and its chalcogen analogues are now introduced to replace the suffix
 * ‘sulfenic acid’ and its chalcogen analogues that were discarded in the 1993 recommendations.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 604, P-56.2, lines 3/4. [modified 20 February 2019]
 *     For ...‘SO-thioperoxol’, SeO-selenoperoxol’, ‘SS-dithioperoxol’, TeS-tellurothioperoxol’,
 *     ‘SeSe-diselenoperoxol’, ‘SeTe-selenotelluroperoxol’, and ‘TeSe-selenotelluroperoxol’ (see
 *     P-63.4.2.1).
 *     read ...‘SO-thioperoxol’, ‘SeO-selenoperoxol’, ‘dithioperoxol’, ‘TeS-tellurothioperoxol’,
 *     ‘diselenoperoxol’, ‘SeTe-selenotelluroperoxol’, and ‘TeSe-telluroselenoperoxol’ (see
 *     P-63.4.2.1).
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-56.2', [
  { formula: 'CH3-S-OH', pin: 'methane-SO-thioperoxol', notNames: ['methanesulfenic acid'] },
  { formula: 'C6H5-SeSe-H', pin: 'benzenediselenoperoxol', notNames: ['benzeneselenoselenic acid'] },
]);
