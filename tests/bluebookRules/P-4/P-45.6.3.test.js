/**
 * P-45.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When names based on alphanumerical order and isotopic descriptors are the same, further choice
 * depends on the alphabetic order of the stereochemical descriptors ‘R’ and ‘S’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450603a.gif', pin: '1-[(1R)-1-bromoethyl]-1-[(1S)-1-bromoethyl]cyclopentane', notNames: ['1-[(1S)-1-bromoethyl]-1-[(1R)-1-bromoethyl]cyclopentane'] },
]);
