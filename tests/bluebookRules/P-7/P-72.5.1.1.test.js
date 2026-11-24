/**
 * P-72.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Assemblies derived from parent anions
 * Anionic compounds with anionic centers derived from the same parent hydride, but located in
 * different parts of a structure, are named, if possible, according to the principles of
 * multiplicative nomenclature (see P-15.3), using the multiplying prefixes ‘bis’, ‘tris’, etc., where
 * necessary.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1077, P-72.5.1.1, example 1. [modified 7 August 2019]
 *     For 1,4-phenylenebis(phosphanide) (PIN)
 *     read (1,4-phenylene)bis(phosphanide) (PIN)
 *     Delete second 1,4-phenylenebis(phosphanide) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.5.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72511c.gif', pin: 'butanedioylbis(azanide)', otherNames: ['butanedioylbis(amide)'] },
]);
