/**
 * P-66.1.1.1.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names for amides derived from carbohydrate acids and α-amino acids are discussed in
 * P-102.5.6.6.2.1, P-102.5.6.6.5, and in P-103.2.7, respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111j.gif', name: 'methyl β-D-galactopyranosiduronamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111k.gif', name: '2-aminoacetamide' },
]);
