/**
 * P-31.1.5.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteroatoms in spiro compounds consisting of monocyclic rings denoted by skeletal replacement (‘a’)
 * nomenclature have priority for low locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.5.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105e.gif', pin: '1-azaspiro[4.5]dec-3-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105f.gif', pin: '1,4,7-trithiaspiro[4.5]dec-9-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105g.gif', pin: '3-silaspiro[5.5]undec-7-ene' },
]);
