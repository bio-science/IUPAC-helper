/**
 * P-74.2.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phosphorus ylides
 * Phosphorus ylides have the general structure R3P⁺–C⁻R2 ↔ R3P=CR2”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1112, P-74.2.1.1.2, example. [modified 12 June 2019]
 *     For trimethyl(isopropylidene)phosphorane
 *     read isopropylidenetri(methyl)phosphorane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74211b.gif', pin: '2-(trimethylphosphaniumyl)propan-2-ide', otherNames: ['2-(trimethylphosphoniumyl)propan-2-ide', 'trimethyl(propan-2-ylidene)-λ⁵-phosphane'] },
]);
