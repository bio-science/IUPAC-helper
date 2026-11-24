/**
 * P-62.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amino groups, i.e., –NH2, attached to heteroatoms
 * When attached to heteroatoms, amino groups are expressed as suffixes when representing the principal
 * characteristic group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201p.gif', pin: 'piperidin-1-amine' },
  { formula: '(CH3)3Si-NH2', pin: '1,1,1-trimethylsilanamine' },
]);
