/**
 * P-73.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Assemblies derived from parent cations
 * Cationic compounds with cationic centers derived from the same parent hydride, but located in
 * different parts of a structure, are named, if possible, according to the principles of
 * multiplicative nomenclature (see P-15.3), using the multiplying prefixes ‘bis-’, ‘tris-’, etc. where
 * necessary.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1101, P-73.5.1.1, example 1. [corrected 7 August 2019]
 *     For 1,4-phenylenebis(phosphanium) (PIN)
 *     read (1,4-phenylene)bis(phosphanium) (PIN)
 *     for 1,4-phenylenebis(phosphonium)
 *     read (1,4-phenylene)bis(phosphonium)
 *   Page 1101, P-73.5.1.1, example 3. [corrected 12 June 2019]
 *     Delete 2,2′-benzene-1,3-diyldi(propan-2-ylium)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.5.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73511b.gif', pin: '4,4′-(ethane-1,2-diyl)bis(1-methylpyridin-1-ium)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73511c.gif', pin: '2,2′-(1,3-phenylene)di(propan-2-ylium)' },
]);
