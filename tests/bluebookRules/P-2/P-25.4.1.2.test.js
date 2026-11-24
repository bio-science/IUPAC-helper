/**
 * P-25.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bridge. An atom or group of atoms is named as a bridge by means of a prefix if it fulfills one or
 * more of the following:
 * (a) if it connects two or more nonadjacent positions of the same ring in a fused ring system;
 * (b) if it connects two or more positions of different rings of a fused ring system and does not
 * thereby form a new ortho- and peri- fused ring;
 * (c) if it connects positions of a ring of a fused ring system to a previously described bridge but
 * cannot be included as part of that bridge;
 * (d) if it connects the atoms at the end of a bond common to two rings of a fused ring system;
 * (e) if it is used to describe a system with only ortho- or ortho- and peri- fusions that cannot be
 * named entirely by fusion principles.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250401a.gif', name: 'criterion (a)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250401b.gif', name: 'criterion (b)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250401c.gif', name: 'criterion (c)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250401d.gif', name: 'criterion (d)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250401e.gif', name: 'criterion (e)' },
]);
