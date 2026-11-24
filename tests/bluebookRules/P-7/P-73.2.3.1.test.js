/**
 * P-73.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acylium cations
 * Cations formally derived by the removal of all the hydroxy groups as hydroxide ions from acids
 * having systematic or retained names are named by replacing the ‘oic acid’ or ‘ic acid’ ending by the
 * suffix ‘oylium’ or ‘ylium’, or the ‘carboxylic acid’ ending by ‘carbonylium’, in accordance with the
 * rules for naming neutral acyl groups (see P-65.1.7). These names are preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1093, P-73.2.3.1, example 6. [corrected 17 June 2020]
 *     For methylphosphonoylium (PIN)
 *     read methylphosphonobis(ylium) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73231a.gif', pin: 'acetylium', otherNames: ['acetyl cation'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73231b.gif', pin: 'cyclohexanecarbonylium', otherNames: ['cyclohexanecarbonyl cation'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73231c.gif', pin: 'pentanethioylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73231d.gif', pin: 'ethenesulfinylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73231e.gif', pin: 'dimethylphosphinoylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73231f.gif', pin: 'methylphosphonobis(ylium)' },
]);
