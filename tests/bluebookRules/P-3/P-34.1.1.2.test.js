/**
 * P-34.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carbonyl compounds”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 415, P-34.1.1.2, example. [modified 11 March 2020]
 *     Delete oxaldehyde (PIN, P-66.6.1.2)
 *     for ethanedial
 *     read ethanedial (PIN)
 *     for glyoxal (see P-66.6.1.2; limited substitution allowed: see P-65.1.8.2)
 *     read glyoxal
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-34.1.1.2', [
  { formula: 'OHC-CHO', pin: 'ethanedial', otherNames: ['glyoxal'] },
]);
