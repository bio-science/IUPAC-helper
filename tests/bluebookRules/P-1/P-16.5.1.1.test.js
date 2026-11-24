/**
 * P-16.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are used around compound (see P-29.1.2) and complex (see P-29.1.3) prefixes; after the
 * multiplicative prefixes ‘bis’, ‘tris’, etc.; to enclose a multiplied parent compound consisting of a
 * parent hydride and a substituent suffix or a multiplied substituent prefix even though preceded by a
 * basic numerical prefix, such as ‘di’, ‘tri’, etc.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 114, P-16.5.1.1, example 3. [corrected 28 October 2016]
 *     For not 1,3,5-tris(decy)lcyclohexane
 *     read not 1,3,5-tris(decyl)cyclohexane
 *   Page 114, P-16.5.1.1, last example. [corrected 30 January 2019]
 *     Delete 1,4-phenylenedi(tridecane).
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.1', [
  { formula: '(HO-CH2-CH2-O)2CH-COOH', pin: 'bis(2-hydroxyethoxy)acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605a.gif', pin: '1,3,5-tri(decyl)cycohexane', notNames: ['1,3,5-tris(decyl)cyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605b.gif', pin: '4,4′-methylenedi(cyclohexane-1-carboxylic acid)' },
  { formula: 'H{S/O}C-CH2-CH2-C{O/S}H', pin: 'butanebis(thioic acid)' },
  { formula: '–CH-[CH2]12-CH2-O-CH2-[CH2]12-CH2–', preferredPrefix: 'oxydi(tetradecane-14,1-diyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605c.gif', pin: '1,4-di(tridecyl)benzene' },
]);
