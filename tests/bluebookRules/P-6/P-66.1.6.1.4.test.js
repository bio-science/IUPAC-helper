/**
 * P-66.1.6.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Condensed ureas
 * Condensed ureas, H2N-[CO-NH]n-H, where n = 2, 3, or 4, are named systematically as diamides of
 * imidodicarbonic acid, diimidotricarbonic acid, and triimidotetracarbonic acid, etc., functional
 * replacement names derived from the corresponding di- or polycarbonic acids. The names biuret,
 * triuret, etc., are no longer recommended as preferred IUPAC names. …
 * Numerical locants for condensed ureas are no longer used in IUPAC preferred names.
 * For polyurets, where n = 5 and higher, skeletal replacement (‘a’) nomenclature leads to preferred
 * IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 866, P-66.1.6.1.4, example 3. [corrected 13 March 2019]
 *     For N-methyl-2,4-diimido-3-thiotricarbonic diamide (PIN)
 *     read N1-methyl-2,4-diimido-3-thiotricarbonic diamide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161x.gif', pin: '2-imidodicarbonic diamide', otherNames: ['biuret'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161y.gif', pin: '2,4-diimidotricarbonic diamide', otherNames: ['triuret'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161z.gif', pin: 'N¹-methyl-2-imidodicarbonic diamide', otherNames: ['1-methylbiuret'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161aa.gif', pin: 'N¹-methyl-2-imido-1-thiodicarbonic diamide', otherNames: ['1-methyl-2-thiobiuret'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161ab.gif', pin: 'N¹-methyl-2,4-diimido-3-thiotricarbonic diamide', otherNames: ['1-methyl-4-thiotriuret'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161ac.gif', pin: '3,5,7-trioxo-2,4,6,8-tetraazanonane-1,9-diamide', otherNames: ['pentauret'] },
]);
