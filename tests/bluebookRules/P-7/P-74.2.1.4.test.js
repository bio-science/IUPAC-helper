/**
 * P-74.2.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphine oxides and chalcogen analogues
 * Phosphine oxides have the generic formula R3P⁺–O⁻ ↔ R3P=O. Chalcogen analogues are phosphine
 * sulfides, phosphine selenides, and phosphine telluride (where O is replaced by S, Se, and Te,
 * respectively). They may be named by three methods:
 * (1) as zwitterionic compounds;
 * (2) by functional class nomenclature using the class names oxide, sulfide, selenide, or telluride;
 * (3) substitutively, as heterones, by using the suffix ‘-one’ and λ⁵-phosphane as the parent hydride.
 * Method (3) leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74214a.gif', pin: 'triphenyl-λ⁵-phosphanone', otherNames: ['triphenylphosphane oxide', '(triphenylphosphaniumyl)oxidanide'] },
]);
