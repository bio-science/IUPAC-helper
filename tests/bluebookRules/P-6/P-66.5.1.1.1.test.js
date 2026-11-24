/**
 * P-66.5.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic mono- and dinitriles are named in the following two ways:
 * (1) substitutively by using the suffix ‘nitrile’; and
 * (2) by functional class nomenclature using the class name ‘cyanide’.
 * Method (1) leads to preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511a.gif', pin: 'hexanenitrile', otherNames: ['pentyl cyanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511b.gif', pin: 'pentanedinitrile', otherNames: ['propane-1,3-diyl dicyanide'] },
]);
