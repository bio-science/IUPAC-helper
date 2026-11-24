/**
 * P-15.3.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A preferred name multiplies the most identical parent structures.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 86, P-15.3.3.2.1, example 2. [corrected 30 January 2019]
 *     For {(triphenylmethoxy)[(triphenylmethyl)sulfanyl]methanediyl}dibenzene
 *     read 1,1′-{(triphenylmethoxy)[(triphenylmethyl)sulfanyl]methylene}dibenzene
 *     for [not ({diphenyl[(triphenylmethyl)sulfanyl]methoxy}methanetriyl)tribenzene; ...
 *     read [not 1,1′,1′′-({diphenyl[(triphenylmethyl)sulfanyl]methoxy}methanetriyl)tribenzene; ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bs.gif', pin: '4,4′,4′′-(ethane-1,1,2-triyl)tribenzoic acid', otherNames: ['4,4′-[2-(4-carboxyphenyl)ethane-1,1-diyl]dibenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bt.gif', pin: '1,1′,1′′-({[diphenyl(triphenylmethoxy)methyl]sulfanyl}methanetriyl)tribenzene', notNames: ['1,1′-{(triphenylmethoxy)[(triphenylmethyl)sulfanyl]methylene}dibenzene', '1,1′,1′′-({diphenyl[(triphenylmethyl)sulfanyl]methoxy}methanetriyl)tribenzene'] },
]);
