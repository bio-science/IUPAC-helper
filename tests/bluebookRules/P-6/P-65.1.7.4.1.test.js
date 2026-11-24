/**
 * P-65.1.7.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The name of a monovalent or divalent acyl group formed by removal of the -OH group from each
 * carboxy group of a carboxylic acid denoted by an ‘oic acid’ suffix is derived from the name of the
 * corresponding acid by changing the ending ‘oic acid’ to ‘oyl’. Names of acyl groups derived from
 * carboxylic acids modified by functional replacement are all denoted by the ending ‘oyl’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 774, P-65.1.7.4.1, example 2. [corrected 6 March 2019]
 *     For 1,10-dioxodecanediyl
 *     read 1,10-dioxodecane-1,10-diyl
 *   Page 775, P-65.1.7.4.1, example 1 on this page. [corrected 9 January 2019]
 *     For 1-sulfanylidene propyl
 *     read 1-sulfanylidenepropyl [delete space]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107c.gif', preferredPrefix: 'propanoyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107d.gif', preferredPrefix: 'decanedioyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107e.gif', preferredPrefix: 'butanimidoyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107f.gif', preferredPrefix: 'propanediimidoyl' },
  { formula: 'CH3-CH2-CS–', preferredPrefix: 'propanethioyl' },
  { formula: '–CS-CH2-CH2-CS–', preferredPrefix: 'butanebis(thioyl)', notNames: ['dithiosuccinyl'] },
]);
