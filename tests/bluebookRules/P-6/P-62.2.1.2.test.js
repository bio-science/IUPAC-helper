/**
 * P-62.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Primary amines, R-NH2, are systematically named in the following ways:
 * (1) by adding the suffix ‘amine’ to the name of the parent hydride;
 * (2) by adding the name of the substituent group R− to the parent hydride ‘azane’;
 * (3) by adding the name of the substituent group R− to the term ‘amine’ used as a preselected parent
 * hydride name for NH3; this method is used only with monoamines.
 * Note: Amine is not a true preselected parent hydride. In these recommendations, it is considered as
 * a ‘pseudo’ parent hydride, based on the premise that this method originated by modification of a
 * functional class name based on the class name amine, for example, ethyl amine. The space in the
 * functional class name is eliminated to form the current name ethylamine.
 * Method (1) leads to preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 670, P-62.2.1.2, example 4. [corrected 19 September 2018]
 *     For (quinolin-4-yl)amine
 *     read (quinolin-4-yl)azane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201g.gif', pin: 'methanamine', otherNames: ['methylazane', 'methylamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201h.gif', pin: '2-methylpropan-1-amine', otherNames: ['(2-methylpropyl)azane', '(2-methylpropyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201i.gif', pin: '1-benzofuran-2-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201j.gif', pin: 'quinolin-4-amine', otherNames: ['4-quinolylamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201k.gif', pin: '1H-inden-3-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201l.gif', pin: '1-thiacyclotridecan-3-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201m.gif', pin: '2,6-dithia-4,8-disiladecan-10-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201n.gif', pin: '2-methylcyclohexan-1-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201o.gif', pin: '2-chloroethan-1-amine' },
]);
