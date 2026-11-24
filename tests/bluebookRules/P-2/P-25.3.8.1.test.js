/**
 * P-25.3.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In preferred IUPAC names and in general nomenclature, numerical and/or letter locants are omitted
 * in fused ring systems with only first-order monocyclic attached hydrocarbon components, ‘benzo’, and
 * those described in P-25.3.2.2.1; the omission is also recommended when the fused ring system is made
 * of two monocyclic hydrocarbons.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.8.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308a.gif', pin: 'benzo[a]tetracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308b.gif', pin: '1H-cyclopenta[8]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308c.gif', pin: 'cyclopropa[de]anthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308d.gif', pin: 'benzo[g]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250308e.gif', pin: '1H-naphtho[2,3-d][1,2,3]triazole', notNames: ['1H-naphtho[2,3][1,2,3]triazole'] },
]);
