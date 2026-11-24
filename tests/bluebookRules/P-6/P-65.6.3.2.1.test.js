/**
 * P-65.6.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “All preferred IUPAC names for esters are named by functional class nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 804, P-65.6.3.2.1, example 2. [corrected 28 October 2016]
 *     For CH3-O-CO-CH2-CH2-CO-O CH2-CH3
 *     read CH3-O-CO-CH2-CH2-CO-O-CH2-CH3
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.2.1', [
  { formula: 'CH3-CO-O-CH2-CH3', pin: 'ethyl acetate' },
  { formula: 'CH3-O-CO-CH2-CH2-CO-O-CH2-CH3', pin: 'ethyl methyl butanedioate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603a.gif', pin: 'methyl cyclohexanecarboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603b.gif', pin: 'methyl 4-ethylbenzene-1-sulfonate' },
]);
