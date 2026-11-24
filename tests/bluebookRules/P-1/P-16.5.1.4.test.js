/**
 * P-16.5.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are placed around substituent groups including the name of a parent hydride in order to
 * avoid any confusion from having two parent hydrides in a substitutive name.
 * This is a change from the 1993 Guide (ref. 2) to facilitate name interpretation in names as such as
 * cyclohexanecarbonyl, in that they, even though they are simple prefixes, could give the illusion …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 116, P-16.5.1.4, example 1. [modified 7 November 2018]
 *     For 4-(cyclohexanecarbonyl)benzenecarbothioic acid (PIN)
 *     read 4-(cyclohexanecarbonyl)benzene-1-carbothioic acid (PIN)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605m.gif', pin: '4-(cyclohexanecarbonyl)benzene-1-carbothioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605n.gif', pin: 'di(benzenesulfinyl)acetic acid' },
]);
