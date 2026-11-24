/**
 * P-65.7.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anhydrides derived from peroxy acids and their chalcogen analogues are named substitutively as
 * pseudoketones (see P-64.3). Multiplicative names are preferred when the conditions for their use are
 * fulfilled (see P-15.3).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 830, P-65.7.5.1, example 1. [modified 6 March 2019]
 *     For 1,1′-(trioxidanediyl)di(ethan-1-one)
 *     read 1,1′-trioxidanediyldi(ethan-1-one)
 *     Replace the structure with:
 *   Page 830, P-65.7.5.1, example 3. [corrected 6 March 2019]
 *     For 1,1′-(dithioxanediyl)di(ethan-1-one)
 *     read 1,1′-dithioxanediyldi(ethan-1-one)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650705a.gif', pin: '1,1′-trioxidanediyldi(ethan-1-one)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650705b.gif', pin: '1-(acetyltetrasulfanyl)propan-1-one' },
  { formula: 'CH3-CO-S-O-S-CO-CH3', pin: '1,1′-dithioxanediyldi(ethan-1-one)' },
  { formula: 'CH3-CO-OO-S-CO-CH3', pin: '1-[(acetylperoxy)sulfanyl]ethan-1-one', otherNames: ['{not 1-[(acetylsulfanyl)peroxy]ethan-1-one'] },
]);
