/**
 * P-93.5.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When one substituent and one hydrogen atom are attached to each of more than two positions of a
 * monocycle, the steric relations of the ligands are expressed by adding ‘r’ (the reference ligand)
 * after the locant of the lowest numbered of these ligands, and ‘c’ for ‘cis’ and ‘t’ for ‘trans’ (as
 * required) after the locant of another ligand, thus expressing the relationship to the reference
 * ligand. The relative configuration is expressed by these stereodescriptors. …
 * The notation consisting of adding ‘r’ (for reference substituent) after the locant of the lowest
 * numbered of these substituents and ‘c’ (for cis) and ‘t’ (for trans) (as appropriate) and the locant
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1246, P-93.5.1.3.1, lines 3-5. [corrected 3 September 2018]
 *     For ...by adding ‘r’ (the reference ligand) followed by a hyphen and the locant of the lowest
 *     numbered of these ligands, and ‘c’ for ‘cis’ and ‘t’ for ‘trans’ (as required) followed by a
 *     hyphen and the locant of another ligand,...
 *     read ...by adding ‘r’ (the reference ligand) after the locant of the lowest numbered of these
 *     ligands, and ‘c’ for ‘cis’ and ‘t’ for ‘trans’ (as required) after the locant of another
 *     ligand,...
 *   Page 1246, P-93.5.1.3.1, Example 1. [Corrected 3 September 2018]
 *     For 1-r,2-c,4-c-tribromocyclohexane
 *     read 1r,2c,4c-tribromocyclohexane
 *     replace structure with:
 *   Page 1246, P-93.5.1.3.1, Example 2. [Corrected 3 September 2018]
 *     For 2-r,3-t,4-c-trichlorocyclopentane-1,1-dicarboxylic acid
 *     read 2r,3t,4c-trichlorocyclopentane-1,1-dicarboxylic acid
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93513a.gif', pin: 'rel-(1R,2S,4S)-1,2,4-tribromocyclohexane', otherNames: ['1r,2c,4c-tribromocyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93513b.gif', pin: 'rel-(2R,3R,4S)-2,3,4-trichlorocyclopentane-1,1-dicarboxylic acid', otherNames: ['2r,3t,4c-trichlorocyclopentane-1,1-dicarboxylic acid'], notNames: ['rel-(2S,3S,4R)-2,3,4-trichlorocyclopentane-1,1-dicarboxylic acid', '(2S*,3S*,4R*)-2,3,4-trichlorocyclopentane-1,1-dicarboxylic acid'] },
]);
