/**
 * P-26.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Simplification and amplification
 * The fundamental operations of phane nomenclature are illustrated in Fig. 2.1. The operation
 * proceeding from left to right is called simplification; the reverse operation is called
 * amplification, or phane replacement.
 * The simplification operation illustrates the initial step in the process of constructing a phane
 * name, namely, the replacement of nomenclaturally significant segments of a complex cyclic structure
 * by …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260101a.gif', name: 'phane parent skeleton simplified skeleton' },
]);
