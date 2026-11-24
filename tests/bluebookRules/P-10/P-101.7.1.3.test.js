/**
 * P-101.7.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution on terminal segments
 * Substitution on terminal segments by prefixes and suffixes expressing characteristic groups is
 * recommended, even when a carbon atom included in a characteristic group is present. Lengthening a
 * terminal segment by two methylene groups is allowed and is denoted by the use of the prefix
 * ‘dihomo’. Further lengthening is possible, but alkyl groups must be used, as an exception to the
 * rule related to seniority of the longest chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101713a.gif', name: '3-oxoandrost-4-en-18-oic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101713b.gif', name: '3-oxoandrost-4-ene-18-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101713c.gif', name: '11α-hydroxy-9-oxoprostan-1-oic acid' },
]);
