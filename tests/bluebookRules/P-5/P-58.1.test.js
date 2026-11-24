/**
 * P-58.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “INTRODUCTION.
 * Section P-45 contains the hierarchical rules for choosing a preferred IUPAC name based on an order
 * of seniority (see P-44) for determining the one and only parent structure. …
 * Explanation: The name 2-(3-cyanophenoxy)-4-isopropylbenzonitrile would also be acceptable in general
 * nomenclature according to P-29.6.2.2)”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 615, P-58.1, example 1, Explanation line 1. [corrected 21 August 2019]
 *     For ...name 2-(3-cyanophenoxy])4-isopropylbenzonitrile would...
 *     read ...name 2-(3-cyanophenoxy)-4-isopropylbenzonitrile would...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580100a.gif', pin: '2-(3-cyanophenoxy)-4-(propan-2-yl)benzonitrile', notNames: ['3-[2-cyano-5-(propan-2-yl)phenoxy]benzonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580100b.gif', pin: '4-chloro-2-[(1,3-oxazol-5-yl)methyl]-1,3-oxazole', otherNames: ['4-chloro-2-[(oxazol-5-yl)methyl]oxazole'], notNames: ['2-[(4-chloro-1,3-oxazol-5-yl)methyl]-1,3-oxazole'] },
]);
