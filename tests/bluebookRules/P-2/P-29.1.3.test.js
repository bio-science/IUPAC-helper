/**
 * P-29.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A complex substituent group consists of a parent substituent group to which is attached, by
 * substitution or concatenation, at least one compound substituent group. In a complex substituent
 * group, the parent substituent group of a component compound substituent group is called a subsidiary
 * parent substituent group. …
 * Concatenation and substitution can be combined to form substituted concatenated complex substituent
 * groups.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290103a.gif', preferredPrefix: '2-bromo-2-(bromomethyl)butyl' },
  { formula: '>N-CH2-O-CH2-N<', preferredPrefix: 'oxybis(methylenenitrilo)' },
  { formula: '–CHCl-O-CH2-CH2-O-CHCl–', preferredPrefix: 'ethane-1,2-diylbis[oxy(chloromethylene)]' },
]);
