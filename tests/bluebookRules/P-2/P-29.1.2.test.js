/**
 * P-29.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A compound substituent group consists of a simple substituent group (the parent substituent group)
 * to which is attached one or more simple substituent groups. Compound substituent group names are
 * formed by combining the names of two or more simple substituent groups. There are three ways to
 * accomplish this:
 * (1) by the substitutive operation;
 * (2) by an additive operation;
 * (3) by combined substitutive and additive operations.
 * Compound substituent groups are formed by the substitution operation rather than by an additive
 * operation unless the simple parent substituent group is not acceptable for substitution, i.e., it
 * has …
 * Mixed concatenated substituent groups are formed by substitution to introduce substituent groups
 * into one or more of their components.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 351, P-29.1.2, example 2. [corrected 11 November 2020]
 *     For chlorocarbonyl (preferred prefix)
 *     read carbonochloridoyl (preferred prefix)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.1.2', [
  { formula: '–CH2-Cl', preferredPrefix: 'chloromethyl' },
  { formula: '–CO-Cl', preferredPrefix: 'carbonochloridoyl' },
]);
