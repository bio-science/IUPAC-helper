/**
 * P-74.2.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphine imides
 * Phosphine imides have the generic structure: R3P⁺–N⁻–R ↔ R3P=N–R. They may be named in three ways:
 * (1) as zwitterionic compounds;
 * (2) by functional class nomenclature using the class name imide;
 * (3) substitutively, as heterimines, by using the suffix ‘-imine’ and λ⁵-phosphane as the parent
 * hydride.
 * Method (3) leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74215a.gif', pin: 'N-ethyl-P,P,P-triphenyl-λ⁵-phosphanimine', otherNames: ['ethyl(triphenylphosphaniumyl)azanide', 'triphenylphosphane N-ethylimide', 'N-ethyl-P,P,P-triphenylphosphane imide', 'N-ethyl-P,P,P-triphenylphosphine imide'] },
]);
