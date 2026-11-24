/**
 * P-68.3.1.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds having the general structure R-CH=N-N=CH-R or RR′C=N-N=RR′ are called ‘azines’ and are
 * named in two ways:
 * (1) substitutively, as derivatives of hydrazine;
 * (2) by functional class nomenclature using the class name ‘azine’.
 * Method (1) leads to preferred IUPAC names.
 * In these recommendations preferred IUPAC names for azines are generated substitutively as ‘ylidene’
 * derivatives of hydrazine rather than by functional class nomenclature as in previous …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312g.gif', pin: 'di(propan-2-ylidene)hydrazine', otherNames: ['bis(1-methylethylidene)hydrazine', 'acetone azine'] },
]);
