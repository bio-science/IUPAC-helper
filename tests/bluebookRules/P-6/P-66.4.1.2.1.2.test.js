/**
 * P-66.4.1.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrocarbyl derivatives are named as substituted guanidines. When the position of the double bond
 * is unknown, the preferred IUPAC name uses a minimum number of primes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 883, P-66.4.1.2.1.2, example 2. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412b.gif', pin: 'N,N,N′,N′-tetramethyl-N′′-phenylguanidine', otherNames: ['N,N,N′,N′-tetramethyl-N′′-phenylcarbonimidic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412c.gif', pin: 'N,N,N′-trimethylguanidine', otherNames: ['N,N,N′-trimethylcarbonimidic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412d.gif', pin: 'N,N′-dimethylguanidine', otherNames: ['N,N′-dimethylcarbonimidic diamide'], notNames: ['N,N′′-dimethylguanidine'] },
]);
