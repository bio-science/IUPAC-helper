/**
 * P-59.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydro and dehydro prefixes are used to express a change in the degree of hydrogenation of the
 * parent hydride. In these recommendations, these prefixes are considered detachable but only in the
 * context of numbering; they are not included among the detachable substituent prefixes. In names,
 * they are cited immediately before the name of the parent compound, after those of detachable
 * substituent prefixes arranged in alphanumerical order.
 * In these recommendations, the prefixes ‘hydro’ and ‘dehydro’ are detachable, but are not included in
 * the category of alphabetized detachable prefixes (see P-14.4; …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.3.2', [
  { pin: '7-bromo-5,6-dihydroazulene-2-carboxylic acid' },
]);
