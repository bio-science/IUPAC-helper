/**
 * P-16.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘mono’ is usually omitted in names of organic compounds. However, it is used to indicate
 * that only one characteristic group of a parent structure has been modified. The ending ‘kis’ is
 * never associated with ‘mono’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.4.2', [
  { pin: '2-carbonoperoxoylbenzoic acid' },
  { pin: 'carbon monoxide' },
]);
