/**
 * P-82.6.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the nuclide is located at a position in a retained name that is not numbered a systematic name
 * that identifies separately the relevant atom is used for the IUPAC preferred name. For general
 * nomenclature an italicized prefixes or Greek letters may be used to denote its position.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.6.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82631c1.gif', pin: 'benzene(¹³C)carbonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82631c2.gif', pin: 'benzene(¹³C)carboxylic acid' },
]);
