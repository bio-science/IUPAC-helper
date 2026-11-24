/**
 * P-64.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic pseudoketones, including those in which the carbonyl group is linked to a heteroatom of a
 * heterocycle (hidden amides, for instance), are named substitutively by using the suffix ‘one’ to
 * indicate the principal function. This method is preferred to that using acyl groups, when present,
 * to denote the –CO-R group.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 734, P-64.3.2, example 4.. [corrected 12 May 2021]
 *     For acetyl(trimethyl)silane
 *     read acetyltri(methyl)silane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301m.gif', pin: '1-(piperidin-1-yl)propan-1-one', otherNames: ['1-propanoylpiperidine', '1-(1-oxopropyl)piperidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301n.gif', pin: '1-(3,4-dihydroquinolin-1(2H)-yl)ethan-1-one', otherNames: ['1-acetyl-1,2,3,4-tetrahydroquinoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301o.gif', pin: '1-[(methylsulfanyl)peroxy]propan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301p.gif', pin: '1-(trimethylsilyl)ethan-1-one', otherNames: ['acetyltri(methyl)silane'] },
]);
