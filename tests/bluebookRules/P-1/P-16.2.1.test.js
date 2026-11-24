/**
 * P-16.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Commas are used:
 * (a) to separate locants, numerals, or italicized letters;
 * (b) to separate numbers, as well as italicized letters, in fusion descriptors when they indicate the
 * presence of separate attached components; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 105, P-16.2.1 (b), example 1. [corrected 19 September 2018]
 *     For dibenzo[c,g]anthracene [PIN, P-25.3.4.2.1 (c)]
 *     read dibenzo[c,g]phenanthrene [PIN, P-25.3.4.2.1 (c)]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.1', [
  { pin: '1,2-dibromoethane' },
  { pin: 'N,N-diethylfuran-2-carboxamide' },
  { pin: 'dibenzo[c,g]phenanthrene' },
  { pin: '6H-pyrrolo[3,2,1-de]acridine' },
]);
