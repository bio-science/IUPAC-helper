/**
 * P-62.2.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “There are no retained names for simple polyamines that are used as preferred IUPAC names. However,
 * in general nomenclature the name ‘benzidine’ may be used but only for the 4,4′-isomer, with
 * substitution allowed as described in P-15.1.8.2 for a Type 2 retained name. The prefix ‘benzidino’
 * is retained with full substitution.
 * Di- and triamines, etc. are named similarly to monoamines. The locant of the parent hydride to which
 * the nitrogen atom is attached is cited as a superscript to the letter locant N, for example, N², …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 675, P-62.2.4.1.1, example 2. [corrected 7 November 2018]
 *     For [(4′-amino[1,1′-biphenyl]-4-yl)amino]
 *     read (4′-amino[1,1′-biphenyl]-4-yl)amino
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.4.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204a.gif', name: 'benzidine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204b.gif', name: 'benzidino' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204c.gif', pin: '3,3′-dimethyl[1,1′-biphenyl]-4,4′-diamine', otherNames: ['3,3′-dimethylbenzidine'] },
]);
