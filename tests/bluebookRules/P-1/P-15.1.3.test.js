/**
 * P-15.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Suffixes (see also P-33)
 * There are, in general, two kinds of suffixes, functional suffixes and cumulative suffixes.
 * (1) Functional suffixes are generally simple suffixes used for describing characteristic groups that
 * express classes. …
 * (2) Cumulative suffixes are used to designate radicals, ions, radical ions, and related species, for
 * example, -yl, -ium, -ide, as well as substituent groups. Cumulative suffixes are not exclusive. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.3', [
  { pin: 'methane' },
  { pin: 'methaniumyl' },
  { pin: 'ethane' },
  { pin: 'ethanamine' },
  { pin: 'ethanaminium' },
]);
