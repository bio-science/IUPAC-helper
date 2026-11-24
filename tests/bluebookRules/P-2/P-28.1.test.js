/**
 * P-28.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “DEFINITIONS
 * Two or more cyclic systems (single rings or fused systems, alicyclic von Baeyer systems, spiro
 * systems, phane systems, fullerenes) that are directly joined to each other by single or double bonds
 * are called ‘ring assemblies’ when the number of such direct ring junctions is one less than the
 * number of cyclic systems involved.
 * Ring assemblies are composed of identical cyclic systems (rings or ring systems); …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280100c.gif', name: 'three identical rings' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280100d.gif', name: 'two different ring systems' },
]);
