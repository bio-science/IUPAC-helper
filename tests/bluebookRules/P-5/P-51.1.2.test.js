/**
 * P-51.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature is preferred to conjunctive nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510102a.gif', pin: '2,2′-(naphthalene-2,3-diyl)diacetic acid', otherNames: ['2,3-naphthalenediacetic acid'] },
]);
