/**
 * P-14.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Position of locants
 * Locants (numerals and/or letters) are placed immediately before that part of the name to which they
 * relate, except in the case of the traditional contracted names when locants are placed at the front
 * of their names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403a.gif', pin: 'hex-2-ene', notNames: ['2-hexene'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403b.gif', pin: 'cyclohex-2-en-1-ol', notNames: ['2-cyclohexen-1-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403c.gif', preferredPrefix: 'naphthalen-2-yl', notNames: ['naphth-2-yl'] },
]);
