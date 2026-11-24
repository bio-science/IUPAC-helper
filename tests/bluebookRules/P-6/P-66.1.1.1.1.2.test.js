/**
 * P-66.1.1.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If an unbranched chain is directly linked to more than two –CO-NH2 groups, these groups are named
 * from the parent hydride by substitutive use of the suffix ‘carboxamide’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111a.gif', pin: 'propane-1,2,3-tricarboxamide' },
]);
