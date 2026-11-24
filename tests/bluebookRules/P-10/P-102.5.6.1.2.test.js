/**
 * P-102.5.6.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphoric acid esters
 * Esters of sugars with phosphoric acid are generally termed ‘phosphates’. In biochemical usage, the
 * term ‘phosphate’ indicates the phosphate residue regardless of the state of ionization or the
 * counter ions present. However, systematically the names must differentiate between a true phosphate,
 * –O-PO(O⁻)2, and an acid phosphate, i.e., -O-PO(OH)2, called a (dihydrogen phosphate). …
 * The term ‘phospho’ is used in place of ‘phosphono’ and ‘phosphonato’ in biochemical contexts.
 * When the sugar is esterified by two or more phosphate groups, the numerical terms ‘bis’, ‘tris’ are
 * used, as ‘bis(phosphate)’, ‘tris(phosphate)’.
 * Phosphonates are treated in the same way as phosphates.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561f.gif', name: 'D-glucopyranose 6-(dihydrogen phosphate)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561g.gif', name: 'α-D-glucopyranosyl phosphate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561h.gif', name: 'D-glucopyranose 6-phosphate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561i.gif', name: 'D-fructofuranose 1,6-bis(phosphate)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561j.gif', name: 'methyl β-D-arabinofuranoside 5-(hydrogen phosphonate)' },
]);
