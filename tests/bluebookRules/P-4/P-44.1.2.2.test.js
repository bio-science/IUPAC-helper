/**
 * P-44.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systems composed of rings and chains (exclusive of linear phanes)
 * Two methods are recognized to name systems composed of rings and chains (exclusive of linear
 * phanes).
 * (1) Within the same class, a ring or ring system has seniority over a chain. When a ring and a chain
 * contain the same senior element, the ring is chosen as parent. …
 * (2) The context may favor the ring or the chain, so that, for example, substituents may be treated
 * alike or an unsaturated acyclic structure may be recognized, or the one chosen has the greater …
 * In the examples that follow, when a choice is possible, names formed by both methods are given. For
 * selection of a preferred IUPAC name, see P-52.2.8.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 452, P-44.1.2.2, example 5. [corrected 5 July 2018]
 *     For (2) 1-(pyridin-2-yl)hydrazine
 *     read (2) (pyridin-2-yl)hydrazine
 *     for 1-(pyridin-2-yl)diazane
 *     read (pyridin-2-yl)diazane
 *   Page 452, P-44.1.2.2, example 6. [corrected 3 June 2020]
 *     For 2-hydrazino-4,5-dihydro-1H-imidazole
 *     read 2-diazanyl-4,5-dihydro-1H-imidazole
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102l.gif', pin: 'heptylbenzene', otherNames: ['1-phenylheptane'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102m.gif', pin: 'ethenylcyclohexane', otherNames: ['cyclohexylethene'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102n.gif', pin: '1,1′-methylenedibenzene', otherNames: ['diphenylmethane'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102o.gif', pin: '1,1′-(ethene-1,2-diyl)dicyclohexane', otherNames: ['1,2-dicyclohexylethene'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102p.gif', pin: '2-hydrazinylpyridine', otherNames: ['(pyridin-2-yl)hydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440102q.gif', pin: '2-hydrazinyl-4,5-dihydro-1H-imidazole', otherNames: ['2-diazanyl-4,5-dihydro-1H-imidazole', '(4,5-dihydro-1H-imidazol-2-yl)hydrazine'] },
]);
