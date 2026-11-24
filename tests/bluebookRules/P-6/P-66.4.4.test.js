/**
 * P-66.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amidoximes (amide oximes)
 * Amide oximes are formally oximes of carboxamides, i.e., compounds having the general structure
 * R-C(=N-OH)-NH2 and derivatives formed by substitution. Preferred IUPAC names are N′-hydroxy or
 * N′-(alkyloxy) derivatives of carboximidamides (amidines). Suffixes such as ‘amide oxime’ or
 * ‘carboxamide oxime’ are no longer recommended.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66440a.gif', pin: 'N′-hydroxy-N-methylethanimidamide', otherNames: ['N′-hydroxy-N-methylacetimidamide'], notNames: ['N-methylacetamide oxime'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66440b.gif', pin: 'N′-ethoxy-1H-imidazole-2-carboximidamide', notNames: ['imidazole-2-carboxamide O-ethyloxime'] },
]);
