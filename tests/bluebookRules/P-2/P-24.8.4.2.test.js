/**
 * P-24.8.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When three ring components represented by two different individual rings, are present, the name of
 * the ring component that is cited second is placed in parentheses to highlight this unusual
 * situation. The λn symbol is placed at the front of the name, preceded by the lowest locant denoting
 * the spiro atom.
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240804d.gif', pin: '2λ⁶-spiro[[1,3,2]benzodioxathiole-2,2′-([1,2,3]benzoxadithiole)-2,5′′-dibenzo[b,d]thiophene]' },
]);
