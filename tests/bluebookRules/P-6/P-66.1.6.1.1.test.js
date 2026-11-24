/**
 * P-66.1.6.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Urea and its substitutive derivatives
 * P-66.1.6.1.1.1 The compound H2N-CO-NH2 has the retained name ‘urea’, which is the preferred IUPAC
 * name, with locants N and N′, as shown above the structure below. The systematic name is ‘carbonic
 * diamide’. The locants 1, 2, and 3 have been used in the past and may be used in general
 * nomenclature.
 * Numerical locants for urea are no longer used in the IUPAC preferred name.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161a.gif', pin: 'urea' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161b.gif', name: 'carbonic diamide' },
]);
