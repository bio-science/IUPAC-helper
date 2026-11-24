/**
 * P-102.6.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “C-Glycosyl compounds
 * Compounds arising formally from the elimination of water from the glycosidic hydroxy group and a
 * hydrogen atom bound to a carbon atom (thus creating a C-C bond) are named using the appropriate
 * glycosyl group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.6.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102614a.gif', name: '6-(β-D-glucopyranosyl)-5,7-dihydroxy-2-(4-hydroxyphenyl)-4H-chromen-4-one' },
]);
