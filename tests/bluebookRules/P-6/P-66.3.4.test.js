/**
 * P-66.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of hydrazides
 * Chalcogen analogues of hydrazides are named substitutively using suffixes formed by functional
 * replacement, i.e., ‘thiohydrazide’, ‘carbothiohydrazide’, ‘sulfonothiohydrazide’, etc., as described
 * in P-33.2.2 and Table 4.4.
 * The following methods are no longer recommended:
 * (a) substitution of hydrazine with appropriately modified acyl groups;
 * (b) modification of retained names by the prefixes ‘thio’, ‘seleno’, ‘telluro’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66340a.gif', pin: 'propanethiohydrazide', notNames: ['(propanethioyl)hydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66340b.gif', pin: 'benzenecarbothiohydrazide', notNames: ['(benzenecarbothioyl)hydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66340c.gif', pin: '2-hydrazinyl-2-sulfanylideneacetohydrazide', notNames: ['thiooxalic dihydrazide'] },
]);
