/**
 * P-63.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The names of ethers when both R and R′ groups are cyclic are formed by methods (1), (2), (3), or
 * (5). Method (1), (3), or (5) leads to preferred IUPAC names.
 * When method (1), substitutive nomenclature, is used, the senior ring or ring system must be chosen
 * as the parent hydride (see P-44).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204g.gif', pin: '(cyclohexyloxy)benzene', otherNames: ['cyclohexyl phenyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204h.gif', pin: '2-phenoxy-1,1′-biphenyl', otherNames: ['biphenyl-2-yl phenyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204i.gif', pin: '2-[(pyridin-3-yl)oxy]pyrazine', otherNames: ['pyrazin-2-yl 3-pyridyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204j.gif', pin: '1,1′-oxydibenzene', otherNames: ['phenoxybenzene', 'diphenyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204k.gif', pin: '1-chloro-2-(4-chlorophenoxy)benzene', otherNames: ['2,4′-dichloro-1,1′-oxydibenzene', '2-chlorophenyl 4-chlorophenyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204l.gif', pin: '2,4,6-trioxa-1,7(1),3,5(1,3)-tetrabenzenaheptaphane', otherNames: ['1,1′-oxybis(3-phenoxybenzene)'] },
]);
