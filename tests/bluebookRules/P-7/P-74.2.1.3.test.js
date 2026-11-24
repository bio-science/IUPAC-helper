/**
 * P-74.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amine imides
 * Amine imides (not amine imines) have the generic formula R3N⁺–N⁻–R. They may be named by two
 * methods:
 * (1) as a zwitterion based on hydrazine (in order not to break the nitrogen chain);
 * (2) by functional class nomenclature using the class name ‘imide’ placed after the name of the
 * amine.
 * Method (1) leads to preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74213a.gif', pin: '1,2,2-trimethylhydrazin-2-ium-1-ide', otherNames: ['1,2,2-trimethyldiazan-2-ium-1-ide', 'N-methylmethanamine N-methylimide', 'N,N′-dimethylmethanamine imide'] },
]);
