/**
 * P-102.5.6.6.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Tartaric acid is the retained name to describe the aldaric acids corresponding to the parent
 * aldoses, erythrose and threose. ‘R’ and ‘S’ are preferred stereodescriptors for denoting the
 * configuration of tartaric acid. Salts and esters are referred to as tartrates.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566x.gif', name: 'L-threaric acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566y.gif', name: 'D-threaric acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566z.gif', name: 'erythraric acid' },
]);
