/**
 * P-102.7.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Oligosaccharides with a free hemiacetal group
 * An oligosaccharide of this type is named as a glycosyl[glycosyl]nglycose, the ‘glycose’ portion
 * being the parent. The conventional depiction has the ‘glycose’ portion on the right. Names are
 * formed as described in P-102.7.2.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.7.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102722a.gif', name: 'α-D-glucopyranosyl-(1→6)-α-D-glucopyranosyl-(1→4)-D-glucopyranose' },
]);
