/**
 * P-52.2.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names for assemblies of two or more identical cyclic systems joined by a single
 * bond are formed using the names of parent hydrides rather than the names of substituent groups,
 * except for biphenyl and polyphenyl assemblies, for which the name benzene is never used. For
 * two-component assemblies, locants of one ring are unprimed; locants of the second ring are primed.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 595, P-52.2.7.1, example 2 on page. [modified 3 June 2020]
 *     For 2,2′-bi(bicyclo[2.2.2]octan)-2-yl
 *     read 2,2′-bi(bicyclo[2.2.2]octanyl)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520207a.gif', pin: '1,1′-bi(cyclopropane)', otherNames: ['1,1′-bi(cyclopropyl)'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520207b.gif', pin: '2,2′-bipyridine', otherNames: ['2,2′-bipyridyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520207c.gif', pin: '1,1′-biphenyl', otherNames: ['biphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520207d.gif', pin: '2,2′-bi(bicyclo[2.2.2]octane)', otherNames: ['2,2′-bi(bicyclo[2.2.2]octanyl)'] },
]);
