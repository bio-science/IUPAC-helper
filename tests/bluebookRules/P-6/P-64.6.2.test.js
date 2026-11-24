/**
 * P-64.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority order of suffixes
 * The order of seniority of ketonic suffixes is C=O > C=S > C=Se > C=Te. Lowest locants are assigned
 * in accordance with that order.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 741, P-64.6.2, example 2 on this page. [corrected 7 November 2018]
 *     For 1,1′-carbonothioyldi[pyridin-2(1H)-one] (PIN)
 *     read 1,1′-carbonothioyldi(pyridin-2(1H)-one) (PIN)
 *     for 1,1′-thiocarbonyldi[pyridin-2(1H)-one]
 *     read 1,1′-thiocarbonyldi(pyridin-2(1H)-one)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640602a.gif', pin: '4-sulfanylidenepentan-2-one', otherNames: ['4-thioxopentan-2-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640602b.gif', pin: '2-sulfanylidene-1,3-thiazolidin-4-one', otherNames: ['2-thioxo-1,3-thiazolidin-4-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640602c.gif', pin: '1,1′-carbonothioyldi(pyridin-2(1H)-one)', otherNames: ['1,1′-thiocarbonyldi(pyridin-2(1H)-one)'] },
]);
