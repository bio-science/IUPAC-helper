/**
 * P-65.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl pseudohalides in which hydroxy groups of all acid groups expressed as the suffix denoting the
 * principal characteristic group (carboxylic, sulfonic, sulfinic, selenonic, etc. acids) have been
 * replaced by pseudohalogen groups (N3, CN, NC, NCO, NCS, NCSe, NCTe) are named by citing the name of
 * the acyl group (see P-65.1.7) followed by the name(s) of the class(es) as separate words, preceded
 * by a multiplicative prefix, as needed. …
 * The names formyl, acetyl, benzoyl, oxalyl, and oxamoyl are retained to generate preferred IUPAC
 * names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 798, P-65.5.2.1, example 3. [corrected 31 October 2018]
 *     For butanedioyl isocyanate isocyanide (PIN)
 *     read butanedioyl isocyanide isothiocyanate (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650502a.gif', pin: 'butanoyl cyanide', otherNames: ['butyryl cyanide'] },
  { formula: 'SCN-CO-CO-NCS', pin: 'oxalyl diisothiocyanate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650502b.gif', pin: 'butanedioyl isocyanide isothiocyanate' },
]);
