/**
 * P-24.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Branched polyspiro alicyclic ring systems
 * Branched polyspiro hydrocarbons composed only of cycloalkane rings are named using ‘dispiro’,
 * ‘trispiro’, etc. before the name of the acyclic hydrocarbon corresponding to the total number of
 * skeletal atoms present. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240203a.gif', pin: 'trispiro[2.2.2⁶.2.2¹¹.2³]pentadecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240203b.gif', pin: 'nonaspiro[2.0.0.0.2⁶.0.2⁹.0⁵.0.0.2¹³.0.2¹⁶.0¹².0⁴.0.2¹⁹.0³]henicosane' },
]);
