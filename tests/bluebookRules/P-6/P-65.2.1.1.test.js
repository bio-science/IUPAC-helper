/**
 * P-65.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The contracted name ‘carbamic acid’ (from carbonamidic acid), for H2N-CO-OH, and ‘carbamimidic
 * acid’ (from carbonamidimidic acid), for H2N-C(=NH)-OH, are retained and are the preferred IUPAC
 * names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.1', [
  { formula: '(CH3)2N-COOH', pin: 'dimethylcarbamic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650201a.gif', pin: 'N-ethyl-N-methylcarbamimidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650201b.gif', pin: '2-hydroxypropyl (2-aminoethyl)carbamate' },
]);
