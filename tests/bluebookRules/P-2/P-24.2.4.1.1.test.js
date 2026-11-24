/**
 * P-24.2.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When heteroatoms are present in a spiro ring system composed of only monocyclic rings, skeletal
 * replacement (‘a’) nomenclature is used to name the heterocyclic system. The name of the
 * corresponding hydrocarbon ring system is first constructed as described above (P-24.2.1, P-24.2.2,
 * P-24.2.3). Heteroatoms are then introduced by using the general principles of skeletal replacement
 * (‘a’) nomenclature. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.4.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240204a.gif', pin: '6-oxaspiro[4.5]decane', notNames: ['10-oxaspiro[4.5]decane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240204b.gif', pin: '6,7,13,14-tetraoxadispiro[4.2.4⁸.2⁵]tetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240204c.gif', pin: '5,6,16,17-tetraoxahexaspiro[2.0.2.0.2⁸.2.2¹³.0⁷.2⁴.0.2¹⁸.2³]docosane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240204d.gif', pin: '11,13,24,25-tetraoxa-12-silapentaspiro[4.0.4⁶.1.1.4¹⁴.0.4¹⁹.1¹².1⁵]pentacosane' },
]);
