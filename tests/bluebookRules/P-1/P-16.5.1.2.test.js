/**
 * P-16.5.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses are used around simple substituent prefixes (see P-29.1) to separate locants of the
 * same type referring to different structural elements, even though locants referring to a particular
 * structural feature may not be explicitly cited. This is recommended for clarity since locants
 * assigned to free valences were previously placed in front of the name, for example, 2-naphthyl.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605d.gif', name: 'naphthalene-2-acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605e.gif', pin: '4-(pyridin-4-yl)benzamide', otherNames: ['4-(4-pyridyl)benzamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605g.gif', pin: 'N-(furan-2-yl)-1H-pyrrol-2-amine' },
]);
