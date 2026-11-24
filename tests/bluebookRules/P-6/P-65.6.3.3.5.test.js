/**
 * P-65.6.3.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Partial esters of polybasic acids and their salts are named by two methods:
 * (1) substitutively on the basis of the anion, the free acid group(s) and the ester group(s) being
 * cited as prefixes;
 * (2) by the procedure for neutral esters and acid salts; the components present are cited in the
 * order, cation, hydrocarbyl group, hydrogen, anion. …
 * Method (1) generates preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 816, P-65.6.3.3.5, example 2. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.5', [
  { formula: 'CH3-CH2-O-CO-CH2-CH2-COO⁻ Na⁺', pin: 'sodium 4-ethoxy-4-oxobutanoate', otherNames: ['sodium ethyl succinate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603az.gif', pin: 'lithium 4-(ethylsulfanyl)-4-oxobutanethioate', otherNames: ['lithium S-ethyl butanebis(thioate)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ba.gif', pin: 'potassium hydrogen 2-(2-ethoxy-2-oxoethyl)-2-hydroxybutanedioate', otherNames: ['potassium 3-ethyl hydrogen 2-hydroxypropane-1,2,3-tricarboxylate', 'potassium 3-ethyl hydrogen citrate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bb.gif', pin: '2-chloro-6-(ethoxycarbonyl)benzoic acid', otherNames: ['1-ethyl hydrogen 3-chlorobenzene-1,2-dicarboxylate', '1-ethyl hydrogen 3-chlorophthalate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bc.gif', pin: '3-chloro-2-(ethoxycarbonyl)benzoic acid', otherNames: ['2-ethyl hydrogen 3-chlorobenzene-1,2-dicarboxylate', '2-ethyl hydrogen 3-chlorophthalate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bd.gif', pin: '5-butoxy-2-methyl-5-oxopentanoic acid', otherNames: ['5-butyl hydrogen 2-methylpentanedioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603be.gif', pin: '2-(acetyloxy)-5-butoxy-2-methyl-5-oxopentanoic acid', otherNames: ['5-butyl hydrogen 2-(acetyloxy)-2-methylpentanedioate'] },
]);
