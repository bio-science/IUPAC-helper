/**
 * P-64.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When an oxygen atom of a ketone, pseudoketone, or heterone is replaced by a sulfur, selenium or
 * tellurium atom, the seniority order for expression as the suffix is O > S > Se > Te.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.7.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640703a.gif', pin: '1-[3-(2-sulfanylidenebutyl)cyclohexyl]butan-2-one', otherNames: ['1-[3-(2-thioxobutyl)cyclohexyl]butan-2-one'] },
]);
