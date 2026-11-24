/**
 * P-101.3.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘apo’
 * The unitalicized prefix ‘apo’ preceded by a locant is used to indicate removal of all of a side
 * chain of a fundamental parent structure beyond the skeletal atom corresponding to that locant.
 * Removal of two or more side chains is indicated by the prefixes ‘diapo’, ‘triapo’, etc., preceded by
 * the required locants. Numbering of the skeletal atoms of the fundamental parent structure is
 * retained in the resulting fragment.
 * The following procedure is used only in carotenoid nomenclature (see ref. 40, Rule Carotenoid 10). …
 * The prefix and its locant immediately precede the parent name unless the locant associated with the
 * prefix ‘apo’ is greater than 5, in which case there is no need to give a Greek letter end-group …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101342a.gif', name: 'β,β-carotene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101342b.gif', name: '6′-apo-β-carotene' },
]);
