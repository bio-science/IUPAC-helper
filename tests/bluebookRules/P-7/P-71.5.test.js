/**
 * P-71.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “PREFIXES DENOTING RADICALS
 * The presence of a radical center in a substituent that is to be cited as a prefix is expressed in
 * two ways:
 * (1) by using the prefix ‘ylo’ that indicates the subtraction of a hydrogen atom from a substituent
 * group, for example ‘–ylomethyl’ for –CH2•;
 * (2) by concatenation of prefixes, for example ‘oxylcarbonyl’ for –CO-O•.
 * This prefix is a nondetachable prefix, attached to the parent substituent prefix, which is formed by
 * usual methods. The presence of two or more radical centers in a substituent cited as a prefix or the
 * removal of two or more hydrogen atoms from a substituent cited as prefix is indicated by the
 * appropriate multiplying prefix, ‘di’, ‘tri’, etc.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1063, P-71.5, example 4. [corrected 19 September 2018]
 *     For oxylcarboxyl (preferred prefix)
 *     read oxylcarbonyl (preferred prefix)
 *     Replace the structure with:
 *     —CO-O•
 *   Page 1063, P-71.5, line before examples. [corrected 21 April 2021]
 *     Delete this line
 *   Page 1063, P-71.5, example 2. [corrected 21 April 2021]
 *     For oxyl (preselected name)
 *     read ylooxidanyl (preselected name)
 *     for ylooxidanyl
 *     read ylooxy
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.5', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71500a.gif', preferredPrefix: 'ylomethyl' },
  { formula: '–O•', preselectedPrefix: 'ylooxidanyl', notNames: ['ylohydroxy'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71500b.gif', preferredPrefix: 'yloformyl' },
  { formula: '–CO-O•', preferredPrefix: 'oxylcarbonyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71500c.gif', preferredPrefix: '3,5-diylophenyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71500d.gif', preselectedPrefix: 'yloamino' },
]);
