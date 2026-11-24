/**
 * P-65.6.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When ‘E’, in R-CO-O-E, is an element from the following list: B, Al, In, Ga, Tl, Si, Ge, Sn, Pb,
 * N(cyclic), P, As, Sb, Bi, the pseudoester is named as a traditional ester, unless other names must
 * be selected in accordance with the seniority order of classes, in decreasing order: salts > acids >
 * anhydrides > esters. For anhydrides, see P-65.7.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 821, P-65.6.3.4.1, example 7. [corrected 24 July 2019]
 *     For O-acetyl-N,N-dimethylhydroxylamine (PIN)
 *     read O-acetyl-N,N-dimethylhydroxylamine
 *     add 1-[(dimethylamino)oxy]ethan-1-one (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.4.1', [
  { formula: 'CH3-CO-O-Si(CH3)3', pin: 'trimethylsilyl acetate' },
  { formula: 'CH3-CH2-SO2-S-Ge(CH3)3', pin: 'S-(trimethylgermyl) ethanesulfonothioate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bo.gif', pin: 'borinan-1-yl acetate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bp.gif', pin: 'phosphinan-1-yl benzoate' },
  { formula: '(CH3-CO-O)3B', pin: 'triacetic boric trianhydride' },
  { formula: 'H2P-O-CO-CH3', pin: 'acetic phosphinous anhydride' },
  { formula: '(CH3)2N-O-CO-CH3', pin: '1-[(dimethylamino)oxy]ethan-1-one', otherNames: ['O-acetyl-N,N-dimethylhydroxylamine'] },
  { formula: 'CH3-CO-O-P(CH3)2', pin: 'acetic dimethylphosphinous anhydride' },
]);
