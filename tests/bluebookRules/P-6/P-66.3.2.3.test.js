/**
 * P-66.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a group having priority for citation as a principal characteristic group is present, a
 * hydrazide group of the type R-CO-NH-NH– or R-SO2-NH-NH– (or the analogous selenium or tellurium
 * group) is named:
 * (1) by expressing the corresponding hydrazide as a prefix by replacing the final letter ‘e’ in the
 * name of the hydrazide by the letter ‘o’, for example, ‘acetohydrazido’, ‘propanehydrazido’, and …
 * (2) as an acylhydrazinyl substituent group; the hydrazinyl group is numbered by using numerical
 * locants ‘1’ and ‘2’, the locant ‘1’ being the nitrogen atom adjacent to the free valence.
 * Method (1) generates preferred IUPAC names.
 * The groups R-CO-N(NH2)–, R-SO2N(NH2)–, etc. are named as substituted derivatives of the group
 * ‘hydrazinyl,’ with numerical locants. This method leads to preferred prefixes.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 875, P-66.3.2.3 (1), line 3. [corrected 13 March 2019]
 *     For ...and ‘benzenecarbohydrazido’; the...
 *     read ...and ‘benzohydrazido’; the...
 *   Page 875, P-66.3.2.3, example 1. [corrected 7 August 2019]
 *     For (1) 4-(acetohydrazido)benzoic acid (PIN)
 *     read (1) 4-acetohydrazidobenzoic acid (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66323a.gif', pin: '4-acetohydrazidobenzoic acid', otherNames: ['4-(2-acetylhydrazin-1-yl)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66323b.gif', pin: '4-(N-ethylacetohydrazido)benzene-1-sulfonic acid', otherNames: ['4-(2-acetyl-2-ethylhydrazin-1-yl)benzene-1-sulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66323c.gif', pin: '4-(1-acetyl-2-ethylhydrazin-1-yl)benzoic acid' },
]);
