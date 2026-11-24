/**
 * P-68.3.1.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Formazan, H2N-N=CH-N=NH
 * The hydrazone of diazenecarbaldehyde, H2N-N=CH-N=NH, has the retained name, which is also the
 * preferred IUPAC name ‘formazan’; it is numbered in a special manner. It can also be named
 * substitutively as a derivative of the parent hydride ‘hydrazine’; its derivatives are named
 * accordingly.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1011, P-68.3.1.3.5, line 3. [corrected 20 March 2019]
 *     For ...derivative of the parent hydride ‘diazene’; its...
 *     read ...derivative of the parent hydride ‘hydrazine’; its...
 *   Page 1011, P-68.3.1.3.5, structure 2. [modified 5 June 2019]
 *     For(hydrazinylidenemethyl)diazene
 *     read (diazenylmethylidene)hydrazine
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313u.gif', pin: 'formazan' },
]);
