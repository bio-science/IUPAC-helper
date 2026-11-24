/**
 * P-65.1.7.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups derived from imidic, hydrazonic, and hydroximic acids with retained names for use only
 * in general nomenclature are named by changing the ‘ic acid’ ending of the names described in
 * P-65.1.3 into ‘oyl’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.3.2', [
  { formula: 'CH3-CH2-C(=NH)–', preferredPrefix: 'propanimidoyl' },
  { formula: 'CH2=CH-C(=NNH2)–', preferredPrefix: 'prop-2-enehydrazonoyl' },
  { formula: '–(HN=)C-CH2-CH2-C(=NH)–', preferredPrefix: 'butanediimidoyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107b.gif', preferredPrefix: 'benzene-1,4-dicarboximidoyl' },
]);
