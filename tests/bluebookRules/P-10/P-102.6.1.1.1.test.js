/**
 * P-102.6.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups formed by removal of the anomeric hydroxy group from a cyclic monosaccharide are
 * named by replacing the final letter ‘e’ of the monosaccharide name by ‘yl’. The term ‘glycosyl
 * residue’ is used in the nomenclature of carbohydrates. Terms of this nature are widely used in
 * naming glycosides, when they are not the parent structures, and oligosaccharides.
 * No locant is added to the name of the substituent to indicate the position of the free valence. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.6.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102611a.gif', name: 'β-D-glucopyranosyl' },
]);
