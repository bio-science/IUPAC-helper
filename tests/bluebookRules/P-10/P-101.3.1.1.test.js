/**
 * P-101.3.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The removal of an unsubstituted skeletal atom, saturated or unsaturated, from a ring or of an
 * unsubstituted skeletal atom from a saturated acyclic portion of a fundamental parent structure with
 * its attached hydrogen atom(s) is described by the nondetachable prefix ‘nor’; the loss of two or
 * more such skeletal atoms is indicated by the usual numerical multiplicative prefixes ‘di’, ‘tri’,
 * etc. added before ‘nor’.
 * The position of the skeletal atom that is removed is denoted in all cases by its locants in the
 * numbering of the fundamental parent structure. …
 * In an acyclic portion of a skeletal structure, the skeletal atom removed preferably is the one of an
 * acyclic atomic connector or a terminal segment nearest to the free end of this acyclic portion …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1304, P-101.3.1.1, example 3 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101311c.gif', name: 'β,β-carotene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101311d.gif', name: '2,2′-dinor-β,β-carotene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101311i.gif', name: 'ε,ε-carotene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101311j.gif', name: '20-nor-ε,ε-carotene' },
]);
