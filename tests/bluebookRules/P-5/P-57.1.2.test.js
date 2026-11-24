/**
 * P-57.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following retained names are used as preferred prefixes for which no substitution is
 * recommended:
 * For preferred prefixes, the names ‘benzyl’, ‘benzylidene’, and ‘benzylidyne’ cannot be substituted.
 * Previously, in the 1993 Guide (ref. 2), they could only be substituted on the ring. However, for
 * general nomenclature restricted substitution is permitted (see P-29.6.2.1).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.1.2', [
  { formula: '–C(CH3)3', preferredPrefix: 'tert-butyl' },
  { formula: 'C6H5-CH2–', preferredPrefix: 'benzyl' },
  { formula: 'C6H5-CH=', preferredPrefix: 'benzylidene' },
  { formula: 'C6H5-C≡', name: 'benzylidyne (preferred prefix) phenylmethylidyne' },
]);
