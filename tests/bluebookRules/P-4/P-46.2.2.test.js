/**
 * P-46.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain contains the greater number of nuclides of higher mass number or
 * isotopically modified substituent atoms or groups.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460202a.gif', preferredPrefix: '3-[²H1]methyl[4-¹⁴C]butyl' },
]);
