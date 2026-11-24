/**
 * P-65.2.3.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from di-, tri-, tetra-, and polycarbonic acids
 * Names of substituent groups are formed by substitution or concatenation as required.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 788, P-65.2.3.1.5, example 2. [corrected 7 November 2018]
 *     For {not (dithiocarboxy)sulfanyl]thioformyl}
 *     read {not [(dithiocarboxy)sulfanyl]thioformyl}
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.3.1.5', [
  { formula: 'HOOC-O-CO–', notNames: ['(carboxyoxy)formyl'] },
  { formula: 'HS-CS-S-CS–', name: '{not [(dithiocarboxy)sulfanyl]thioformyl}' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203u.gif', pin: '2-[(carboxyoxy)carbonyl]benzoic acid' },
]);
