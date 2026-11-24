/**
 * P-14.3.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The locant is omitted in monosubstituted symmetrical parent hydrides or parent compounds where
 * there is only one kind of substitutable hydrogen.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 32, P-14.3.4.3, example 1 on this page. [corrected 19 September 2018]
 *     For choropropanedioic acid (PIN)
 *     read chloropropanedioic acid (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.3.4.3', [
  { formula: 'CH3-NH-CO-NH2', pin: 'methylurea' },
  { formula: 'Cl-SiH2-O-SiH3', name: 'chlorodisiloxane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403f.gif', pin: 'chlorocoronene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403g.gif', pin: 'pyrazinecarboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403h.gif', pin: 'chloropropanedioic acid', otherNames: ['chloromalonic acid'] },
]);
