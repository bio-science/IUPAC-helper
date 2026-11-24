/**
 * P-65.1.3.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, suffix mode
 * The name of an acid in which the carbonyl oxygen atom of a carboxylic acid group has been replaced
 * by =NH is formed by functional replacement nomenclature and the infix ‘imid(o)’ to modify the ‘ic
 * acid’ or ‘oic acid’ ending of the retained name of an acid; or the ‘oic acid’ or ‘carboxylic acid’
 * suffix of a systematic name of an acid, to ‘imidic acid’ or ‘carboximidic acid’.
 * Preferred names of imidic acids are those derived from systematic substitutive preferred IUPAC names
 * of carboxylic acids.
 * The use of systematic substitutive names for imidic acids is a change for formic acid, acetic acid,
 * benzoic acid, and oxalic acid.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.3.1.1', [
  { formula: 'HC(=NH)-OH', pin: 'methanimidic acid', otherNames: ['formimidic acid'] },
  { formula: 'CH3-C(=NH)-OH', pin: 'ethanimidic acid', otherNames: ['acetimidic acid'] },
  { formula: 'C6H5-C(=NH)-OH', pin: 'benzenecarboximidic acid', otherNames: ['benzimidic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103a.gif', pin: 'butanimidic acid', otherNames: ['butyrimidic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103b.gif', pin: 'butanediimidic acid', otherNames: ['succinimidic acid'] },
  { formula: 'HO-C(=NH)-C(=NH)-OH', pin: 'ethanediimidic acid', otherNames: ['oxalimidic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103c.gif', pin: 'cyclohexanecarboximidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103d.gif', pin: 'benzene-1,2-dicarboximidic acid', otherNames: ['phthalimidic acid'] },
]);
