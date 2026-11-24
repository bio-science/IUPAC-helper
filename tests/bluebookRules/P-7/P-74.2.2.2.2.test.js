/**
 * P-74.2.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Azides may be named by three methods:
 * (1) substitutively, using the compulsory prefix azido (P-61.7);
 * (2) by functional class nomenclature using the class name azide;
 * (3) as derivatives of the zwitterionic parent hydride ‘triazadien-2-ium-1-ide.’
 * Method (1) yields preferred IUPAC names (see also P-61.7)”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74222e.gif', pin: 'azidobenzene', otherNames: ['phenyl azide', '3-phenyltriazadien-2-ium-1-ide'] },
]);
