/**
 * P-106.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “NUCLEOSIDE DIPHOSPHATES AND TRIPHOSPHATES
 * Diphosphate, triphosphate, etc. esters of nucleosides are named by citing a phrase such as
 * diphosphate, after the name of the nucleoside. The presence of hydrogen atoms on the diphosphate,
 * triphosphate, etc. component of the molecule is indicated by the words ‘hydrogen’, ‘dihydrogen, etc.
 * Parentheses are used to avoid ambiguity.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-106.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106200a.gif', name: 'uridine 5′-(tetrahydrogen triphosphate)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106200b.gif', name: 'xanthosine 3′-(trihydrogen diphosphate)' },
]);
