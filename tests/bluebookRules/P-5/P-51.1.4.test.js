/**
 * P-51.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature is preferred to multiplicative nomenclature (see P-51.4.1)
 * when the criteria for use of skeletal nomenclature are met.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510104a.gif', pin: '8-thia-2,4,6-trisiladecane', otherNames: ['1-[(ethylsulfanyl)methyl]-1′-methyl-1,1′-[silanediylbis(methylene)]bis(silane)'] },
]);
