/**
 * P-66.4.1.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The substituent group HN=CH-NH– is named ‘methanimidamido’; it can also be named as a compound
 * substituent prefix ‘formimidoylamino’ or a complex substituent prefix ‘(iminomethyl)amino’.
 * ‘Methanimidamido’ is the preferred IUPAC prefix. The substituent group H2N-CH=N– can only be named
 * as a complex substituent group, ‘(aminomethylidene)amino’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66413d.gif', pin: '4-methanimidamidobenzoic acid', otherNames: ['4-[(iminomethyl)amino]benzoic acid', '4-(formimidoylamino)benzoic acid'] },
]);
