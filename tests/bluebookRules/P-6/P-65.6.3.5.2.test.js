/**
 * P-65.6.3.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sultones and sultines are intramolecular esters of hydroxy sulfonic acids and sulfinic acids,
 * respectively, and may be named in three ways:
 * (1) as heterocyclic heterones by adding the suffix ‘one’, ‘dione’, ‘thione’, etc. and the
 * appropriate multiplicative prefixes to the name of the heterocyclic parent hydride;
 * (2) by citing the term ‘sultone’ or ‘sultine’ denoting the –O-SO2– or –O-SO– group in a ring or ring
 * system after the name of the appropriate parent hydride preceded by a pair of locants describing …
 * (3) as heterocycles according to functional class names using the class name ‘oxide’
 * Method (1) gives preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 824, P-65.6.3.5.2, example 3. [corrected 9 January 2019]
 *     For 1,2λ⁴-oxathiolan-2-thione (PIN)
 *     read 1,2λ⁴-oxathiolane-2-thione (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603by.gif', pin: '2H-2λ⁶-naphtho[1,8-cd][1,2]oxathiole-2,2-dione', otherNames: ['naphtho[1,8-cd][1,2]oxathiole 2,2-dioxide', 'naphthalene-1,8-sultone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bz.gif', pin: '3-methyl-1,2λ⁶-oxathiane-2,2-dione', otherNames: ['3-methyl-1,2-oxathiane 2,2-dioxide', 'pentane-2,5-sultone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ca.gif', pin: '1,2λ⁴-oxathiolane-2-thione', otherNames: ['1,2-oxathiolane 2-thiooxide'] },
]);
