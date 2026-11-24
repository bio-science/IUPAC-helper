/**
 * P-68.3.1.3.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes derived from formazan for substitutive nomenclature
 * Substituent groups derived from formazan are as follows; retained names lead to preferred IUPAC
 * prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1013, P-68.3.1.3.5.2, column 3 first name. [corrected 28 October 2016]
 *     For hydrazinylidenemethyl)diazenyl
 *     read (hydrazinylidenemethyl)diazenyl
 *   Page 1014, P-68.3.1.3.5.2, example 1 on this page. [corrected 28 October 2016]
 *     For
 *     3-(2-{cyano-[(2-hydroxy-5-sulfophenyl)diazenyl]methylidene}hydrazinyl)-4-hydroxybenzene-1-sulfonic
 *     acid
 *     read
 *     3-(2-{cyano[(2-hydroxy-5-sulfophenyl)diazenyl]methylidene}hydrazinyl)-4-hydroxybenzene-1-sulfonic
 *     acid
 *     for {not
 *     3-(2-{cyano-[(2-hydroxy-5-sulfophenyl)hydrazinylidene]methyl}diazenyl)-4-hydroxybenzene-1-sulfonic
 *     acid
 *     read {not
 *     3-({cyano[(2-hydroxy-5-sulfophenyl)hydrazinylidene]methyl}diazenyl)-4-hydroxybenzene-1-sulfonic
 *     acid
 *   Page 1014, P-68.3.1.3.5.2, example on this page. [corrected 5 July 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313ak.gif', pin: '3-(phenyldiazenyl)-3-(phenylhydrazinylidene)propanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313al.gif', pin: '3,3′-(3-cyanoformazan-1,5-diyl)bis(4-hydroxybenzene-1-sulfonic acid)', otherNames: ['3-(2-{cyano[(2-hydroxy-5-sulfophenyl)diazenyl]methylidene}hydrazinyl)-4-hydroxybenzene-1-sulfonic acid', '{not 3-({cyano[(2-hydroxy-5-sulfophenyl)hydrazinylidene]methyl}diazenyl)-4-hydroxybenzene-1-sulfonic acid'] },
]);
