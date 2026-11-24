/**
 * P-24.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monospiro ring systems with two identical polycyclic ring components
 * The λn symbol is placed at the front of the complete name formed from the names of two identical
 * ring system components including the heteroatoms in their name; the λn symbol is preceded by the
 * lowest locant denoting the spiro atom. If indicated hydrogen atoms are required, they are placed
 * before the λ symbol. When there is a choice, the locant of the first cited component is used for
 * indicated hydrogen.
 * Note: The ‘lowest locant’ is used as the criterion for identification of the λn spiro atom rather
 * than ‘least primed locant‘ as used in SP-7 in ref. 8.
 * Note: The double set of brackets in this name occurs because the spiro name requires them (see
 * P-24.3.1) and brackets are used to enclose locants belonging to ring component names (see
 * P-16.5.2.2).
 * Note: The double set of brackets in this name occurs because the spiro name requires them (see
 * P-24.3.1) and brackets are used to enclose locants locants belonging to ring component names (see …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240802a.gif', pin: '2λ⁴,2′-spirobi[[1,3,2]benzodioxathiole]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240802b.gif', pin: '1H-2λ⁵,2′-spirobi[[1,3,2]benzodiazaphosphinine]' },
]);
