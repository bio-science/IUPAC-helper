/**
 * P-65.2.3.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When necessary, letter locants O, S, Se, and Te are used, as appropriate, to designate the position
 * of a chalcogen atom replacing oxygen in –OH or =O groups. Superscripted letter locants, such as Ox,
 * Sx, Sex, and Tex, are placed before the term ‘acid’ as needed.
 * The use of superscripted letter locants is a change from previous practice where numerical locants
 * were placed in front of the letter locants such as 1-O and 3-O, as described in ref. 1, Rule
 * C-213.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.3.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203l.gif', pin: '1,1,3,3-tetrathiodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203m.gif', pin: 'pentathiodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203n.gif', pin: '1,3-dithiodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203o.gif', pin: '1,3-dithiodicarbonic S¹,S³-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203p.gif', pin: '1,3-dithiodicarbonic O¹,O³-acid' },
]);
