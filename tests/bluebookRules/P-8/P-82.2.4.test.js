/**
 * P-82.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In a name consisting of two or more words, the isotopic descriptor is placed before the appropriate
 * word or part of the word that includes the nuclide(s), unless unambiguous locants are available or
 * are unnecessary.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.2.4', [
  { formula: 'CH3-COO²H', name: 'acetic (²H)acid' },
  { formula: 'H¹⁴COO⁻ Na⁺', pin: 'sodium (¹⁴C)formate' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82240c.gif', pin: 'cyclohexane(²H)carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82240d.gif', pin: '4-(2-¹⁴C)ethylbenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82240f.gif', pin: 'ethyl (2-¹⁴C)propanoate' },
]);
