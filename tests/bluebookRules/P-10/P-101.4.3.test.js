/**
 * P-101.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement of heteroatoms by carbon atoms
 * Replacement of a heteroatom in a parent structure by a carbon atom is indicated by the replacement
 * (‘a’) prefix ‘carba’. The original numbering is maintained. If the heteroatom is not numbered, the
 * replacing carbon atom is numbered by affixing the letter ‘a’ to the locant of the immediately
 * adjacent lower numbered skeletal atom. If the immediately adjacent lower numbered skeletal atom is a
 * ‘homo’ atom, the letter ‘b’, ‘c’, etc., as appropriate, is used. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101430a.gif', name: 'spirostan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101430b.gif', name: '16a,22a-dicarba-5β-spirostan' },
]);
