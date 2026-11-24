/**
 * P-57.1.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “All preferred prefixes derived from parent hydrides whose degree of hydrogenation has been modified
 * are formed systematically according to rules discussed in P-32. There is a choice when the free
 * valences are in position 1 or at any position on the chain: preferred prefixes are given to the less
 * substituted chain (see example 3 below, and many examples in P-32.1.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.1.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106a.gif', preferredPrefix: 'but-3-en-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106b.gif', preferredPrefix: 'prop-2-en-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106c.gif', preferredPrefix: 'but-3-en-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106d.gif', preferredPrefix: 'bicyclo[2.2.2]oct-5-en-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106e.gif', preferredPrefix: 'spiro[4.5]deca-1,9-dien-6-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106f.gif', preferredPrefix: '3,4-dihydronaphthalen-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106g.gif', preferredPrefix: '1,2-dihydroisoquinolin-3-yl' },
]);
