/**
 * P-68.2.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority of the Group 14 elements
 * In the presence of groups of higher seniority, parent structures and prefixes are chosen according
 * to the order of seniority (see P-41 and P-44) and the rules for selection of a preferred name (see
 * P-45).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 992, P-68.2.6.2, example 1 on this page. [modified 1 July 2020]
 *     For methoxydimethyl[(2-(trimethylgermyl)phenyl]silane (PIN)
 *     read methoxydi(methyl)[2-(trimethylgermyl)phenyl]silane (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68262a.gif', pin: '5,5′-(1,1,2,2-tetramethyldigermane-1,2-diyl)di(pentanal)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68262b.gif', pin: 'methyl 3-(triethoxygermyl)propanoate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68262c.gif', pin: '1,1,3,3-tetramethyldistannoxane-1,3-diyl dipropanoate' },
  { formula: 'H3Pb-CH2-PbH2-CH2-PbH3', name: 'bis(plumbylmethyl)plumbane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68262d.gif', pin: 'methoxydi(methyl)[2-(trimethylgermyl)phenyl]silane' },
  { formula: '[(CH3)3Si]2CH-SnH(OH)-CH[Si(CH3)3]2', pin: 'bis[bis(trimethylsilyl)methyl]stannanol' },
]);
