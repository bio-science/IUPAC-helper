/**
 * P-24.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If there is a choice for assigning primed locants, the lower number at the spiro atom is unprimed.
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to component names (see P-16.5.2.2).
 * Note 1: The indicated hydrogen at position 2′ may be omitted in general nomenclature, but it must be
 * cited in the preferred IUPAC name.
 * Note 2: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to component names (see P-16.5.2.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240303a.gif', pin: '1′H,2H-1,2′-spirobi[azulene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240303b.gif', pin: '2′H,4H-2,4′-spirobi[[1,3]dioxolo[4,5-c]pyran]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240303c.gif', pin: '2′H,3H-2,3′-spirobi[[1]benzothiophene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240303d.gif', pin: '2,4′-spirobi[[1]benzopyran]', otherNames: ['2,4′-spirobi[chromene]'] },
]);
