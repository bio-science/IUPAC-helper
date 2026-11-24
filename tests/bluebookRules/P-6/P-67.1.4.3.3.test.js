/**
 * P-67.1.4.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from the hydrazides of nitric acid and nitrous acid
 * Substituent groups derived from nitric hydrazide, O2N-NH-NH2, and nitrous hydrazide, ON-NH-NH2, are
 * named by substituting the acyl groups ‘nitro’ or ‘nitroso’ into the appropriate substituent group
 * ‘hydrazin-1-yl’, ‘hydrazin-1-ylidene’, etc.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 943, P-67.1.4.3.3, line 3. [corrected 25 August 2016]
 *     For ...appropriate substituent group ‘hydrazine-1-yl’, ‘hydrazine-1-ylidene’, etc.
 *     read ...appropriate substituent group ‘hydrazin-1-yl’, ‘hydrazin-1-ylidene’, etc.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67143a.gif', preselectedPrefix: '2-nitrohydrazin-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67143b.gif', preselectedPrefix: 'nitrosohydrazinylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67143c.gif', preselectedPrefix: '1-nitrohydrazin-1-yl' },
]);
