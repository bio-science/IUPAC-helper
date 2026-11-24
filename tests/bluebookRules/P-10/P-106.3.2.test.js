/**
 * P-106.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Analogues of nucleoside di- and polyphosphates can be named by the functional replacement
 * techniques applicable to di- and polyphosphoric acids (see P-67.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-106.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106320a.gif', name: 'adenosine 5′-(trihydrogen 2-thiodiphosphate)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106320b.gif', name: 'guanosine 5′-[hydrogen (phosphonomethyl)phosphonate]' },
]);
