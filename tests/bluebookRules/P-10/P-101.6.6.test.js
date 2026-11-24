/**
 * P-101.6.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The introduction of unsaturation additional to any unsaturation implied in a parent structure whose
 * name does not end in ‘an’, ‘ane’, or ‘anine’, the conversion of an implied double bond into a triple
 * bond, and the introduction of an additional double bond with rearrangement of an implied double bond
 * are denoted by the prefix ‘dehydro’, itself prefixed by a numerical multiplying term equal to the
 * number of hydrogen atoms removed and the appropriate locants. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.6.6', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101660a.gif', name: 'penam' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101660b.gif', name: '2,3-didehydropenam' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101660c.gif', name: 'lycorenan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101660d.gif', name: '3,5-didehydrolycorenan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101660e.gif', name: 'ε,ε-carotene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101660f.gif', name: '7,8-didehydro-ε,ε-carotene' },
]);
