/**
 * P-74.2.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Diazo compounds may be named in two ways:
 * (1) substitutively by using the compulsory prefix diazo (P-61.4);.
 * (2) as derivatives of the zwitterionic parent hydride diazen-2-ium-1-ide.
 * Method (1) leads to preferred IUPAC names (see also P-61.4).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74222f.gif', pin: 'diazomethane', otherNames: ['methylidenediazen-2-ium-1-ide'] },
]);
