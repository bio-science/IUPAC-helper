/**
 * P-65.1.7.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups derived from dicarboxylic acids with retained names modified by functional replacement
 * by =S, =Se, and =Te are formed systematically, as described in P-65.1.7.4.2.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107m.gif', preferredPrefix: 'butanebis(thioyl)', notNames: ['dithiosuccinyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107n.gif', preferredPrefix: 'benzene-1,2-dicarbothioyl', notNames: ['dithiophthaloyl'] },
]);
