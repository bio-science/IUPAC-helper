/**
 * P-65.1.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following names are retained, but only for general nomenclature, with substitution according to
 * P-15.1.8.2.1 allowed (see also P-34).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101a.gif', pin: 'furan-2-carboxylic acid', otherNames: ['2-furoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101b.gif', pin: 'benzene-1,3-dicarboxylic acid', otherNames: ['isophthalic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101c.gif', pin: 'benzene-1,2-dicarboxylic acid', otherNames: ['phthalic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101d.gif', pin: 'benzene-1,4-dicarboxylic acid', otherNames: ['terephthalic acid'] },
]);
