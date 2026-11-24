/**
 * P-51.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A maximum number of identical parent structures must be expressed by the multiplicative name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 561, P-51.3.2.1, example 1 on this page. [corrected 24 October 2018]
 *     For [not {(triphenylmethoxy)[(triphenylmethyl)sulfanyl]methanediyl}dibenzene];
 *     read [not 1,1′-{(triphenylmethoxy)[(triphenylmethyl)sulfanyl]methylene}dibenzene];
 *     for [not ({diphenyl[(triphenylmethyl)sulfanyl]methoxy}methanetriyl)tribenzene;
 *     read [not 1,1′,1′′-({diphenyl[(triphenylmethyl)sulfanyl]methoxy}methanetriyl)tribenzene;
 *     for PIN is lower alphanumerically (‘diphenyltriphenylmethyl’) is lower...
 *     read PIN is lower alphabetically (‘diphenyltriphenylmethoxy’) is lower...
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302a.gif', pin: '4,4′,4′′-(ethane-1,1,2-triyl)tribenzoic acid', notNames: ['4,4′′-[2-(4-carboxyphenyl)ethane-1,1-diyl]dibenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302b.gif', name: '1,1′-(2,2-dibenzylpropane-1,3-diyl)dibenzene (PIN, a multiplicative name' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302c.gif', pin: '1,1′,1′′-({[diphenyl(triphenylmethoxy)methyl]sulfanyl}methanetriyl)tribenzene', notNames: ['1,1′-{(triphenylmethoxy)[(triphenylmethyl)sulfanyl]methylene}dibenzene]', '1,1′,1′′-({diphenyl[(triphenylmethyl)sulfanyl]methoxy}methanetriyl)tribenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302d.gif', pin: '3,3′-[furan-3,4-diylbis(oxyethane-2,1-diyloxy)]difuran', otherNames: ['3,4-bis[2-(furan-3-yloxy)ethoxy]furan (a substitutive name)]'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302e.gif', pin: '3,3′-{furan-3,4-diylbis[oxy(3,6,9,12-tetraoxatetradecane-14,1-diyl)oxy]}difuran' },
]);
