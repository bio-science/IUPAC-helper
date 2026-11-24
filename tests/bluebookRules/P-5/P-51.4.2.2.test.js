/**
 * P-51.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature is used to derive preferred IUPAC names for heterocyclic
 * von Baeyer ring systems (see P-23.3.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402c.gif', pin: '2,6-dioxabicyclo[3.3.2]decane' },
]);
