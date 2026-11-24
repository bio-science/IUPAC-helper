/**
 * P-62.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Salts of indefinite structure (adducts)
 * When the above rule cannot be applied because the structure is indefinite, amine and imine salts are
 * named as organic-inorganic adducts, see P-14.8.2. Formulas for these adducts are written as
 * described in P-14.8. Names are constructed in the order that the formulas are written. Preferred
 * IUPAC names cannot be assigned to salts that include inorganic acids pending the development of
 * rules for choosing preferred IUPAC names for inorganic substances.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 689, P-62.6.2, example 2 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620602a.gif', name: '2-ethylbenzene-1,4-diamine—hydrogen chloride (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620602b.gif', name: 'N,N-dimethyl-1,3-thiazolidin-2-amine—sulfuric acid (2/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620602c.gif', pin: 'methanesulfonic acid—cyclopentane-1,3-diamine (1/1)' },
]);
