/**
 * P-25.4.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When there is a choice of locants, lowest locants are assigned according to the following criteria,
 * in order, until a definitive decision is reached:
 * (a) low locants for heteroatoms;
 * (b) low locants for bridgehead atoms within a bridge;
 * The remaining atoms (excluding hydrogen) are then numbered consecutively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250404b.gif', pin: '9,10-[1,2]benzenoanthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250404c.gif', pin: '10,5-[2,3]furanobenzo[g]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250404d.gif', pin: '12H-5,10-[2,5]epipyranobenzo[g]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250404e.gif', pin: '6,13-(methano[1,2]benzenomethano)pentacene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250404f.gif', pin: '6b,12b-[1,8]naphthalenoacenaphthyleno[1,2-a]acenaphthylene' },
]);
