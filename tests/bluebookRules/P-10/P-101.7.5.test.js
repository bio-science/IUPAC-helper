/**
 * P-101.7.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘de’ (not ‘des’), followed by the name of a group or atom (other than hydrogen), denotes
 * removal of that group or atom and addition of hydrogen atoms as necessary. The prefix ‘de’ is
 * currently used in carbohydrate nomenclature (see P-102.5.3) to indicate the removal of an oxygen
 * atom from –OH with reconnection of the hydrogen atom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101750a.gif', name: 'lythranidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101750b.gif', name: '2′′-demethoxylythranidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101750c.gif', name: '6′-deoxylythranidine' },
]);
