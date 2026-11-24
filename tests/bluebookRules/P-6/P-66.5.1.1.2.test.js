/**
 * P-66.5.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If an unbranched alkane is linked to more than two terminal cyano groups, all cyano groups are
 * named from the parent hydride by the substitutive suffix ‘carbonitrile’, preceded by appropriate
 * multiplying prefix and locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511c.gif', pin: 'butane-1,1,1-tricarbonitrile' },
]);
