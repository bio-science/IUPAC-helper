/**
 * P-74.2.2.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Vinyl (ethenyl) carbenes have the structure RR′C=CR′′-C²•-R′′′.
 * Preferred IUPAC names are formed by using the longest carbon chain according to the principles of
 * substitutive nomenclature for radicals, low locants being assigned to the suffix ‘ylidene’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1121, P-74.2.2.3.4. line 1. [corrected 26 September 2018]
 *     For RR′=CR′′-C²•-R′′′
 *     read RR′C=CR′′-C²•-R′′′
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74223d.gif', pin: 'prop-2-en-1-ylidene' },
]);
