/**
 * P-51.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature is preferred to substitutive nomenclature when heteroatoms
 * are present in chains (see P-51.4.1) and the criteria for the use of skeletal nomenclature are met.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510103a.gif', pin: '3-phospha-2,5,7-trisilaoctane' },
]);
