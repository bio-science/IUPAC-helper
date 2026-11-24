/**
 * P-26.5.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lowest locants are assigned to heteroatoms considered without regard to the nature of the
 * heteroatom, first for the set of primary locants for the heteroatoms, i.e., the locants of the
 * simplified skeleton (without including any superscript numbers), and then, if these locants are
 * identical, with regard to the set of the complete heteroatom locants, which include the primary and
 * the superscript numbers.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.5.4.1', [
  { notNames: ['3-oxa-6-thia-1,7(1,3)-dibenzenacyclododecaphane (II)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260504c.gif', notNames: ['4,6-dioxa-1²,5⁸-diaza-1,5(1,5)-dicycloundecana-3(1,3)-benzenacycloheptaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260504d.gif', pin: '6-oxa-2-thia-4-selena-1(4)-pyridina-3,5(1,4),7(1)-tribenzenaheptaphane', notNames: ['2-oxa-6-thia-4-selena-7(4)-pyridina-1(1),3,5(1,4)-tribenzenaheptaphane'] },
]);
