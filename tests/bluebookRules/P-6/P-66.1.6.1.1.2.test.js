/**
 * P-66.1.6.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives of urea formed by substitution on the nitrogen atom(s) are named as substitution
 * products in accordance with the seniority order of urea that is ranked as an amide of carbonic acid.
 * Amides of cyanic and the di- and polycarbonic acids follow the same seniority as the corresponding
 * acid (see P-42.2).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 861, P-66.1.6.1.1.2, example 1. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161c.gif', pin: 'N,N′-dimethylurea', otherNames: ['N,N′-dimethylcarbonic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161d.gif', pin: 'N-(propan-2-ylidene)urea', otherNames: ['isopropylideneurea', 'N-(propan-2-ylidene)carbonic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161e.gif', pin: 'N-[1-cyano-3-(methylsulfanyl)propyl]-N′-methylurea', otherNames: ['N-[1-cyano-3-(methylsulfanyl)propyl]-N′-methylcarbonic diamide'] },
]);
