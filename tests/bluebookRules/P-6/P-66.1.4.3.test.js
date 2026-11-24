/**
 * P-66.1.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of chalcogen derivatives of ‘hidden’ amides
 * Names are formed as described in P-64.6.1 for chalcogen derivatives of pseudoketones.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66143a.gif', pin: '1-(pyrrolidin-1-yl)ethane-1-thione', notNames: ['1-(ethanethioyl)pyrrolidine'] },
]);
