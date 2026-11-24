/**
 * P-82.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Examples of isotopically substituted stereoisomers
 * Stereochemical affixes (for example D and L) are added according to the rules of special classes,
 * such as carbohydrates, amino acids, steroids, etc., described in Chapter P-10; they usually refer to
 * the parent substance (or unmodified compound) according to the particular class of compounds. In
 * these classes isotopic descriptors may follow the stereochemical descriptors according to
 * biochemical usage (ref. 30).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82420a.gif', name: '5α-(17-²H)pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82420b.gif', name: 'L-(4-¹³C,³⁵S)methionine' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82420c.gif', name: '2-deoxy-2-(¹⁸F)fluoro-β-D-glucopyranose' },
]);
