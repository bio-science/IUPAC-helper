/**
 * P-63.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes corresponding to the suffixes described in P-63.4.2.1 are obtained in two ways:
 * (1) by using prefixes such as ‘hydroperoxy’, –OOH; ‘disulfanyl’, –SSH, or by combining simple
 * prefixes, ‘hydroxy’ –OH; ‘oxy-’, –O–; ‘sulfanyl’, –SH; etc.;
 * (2) by using prefixes such as dithiohydroperoxy, –SSH; SO-thiohydroperoxy, –OSH;
 * SeS-selenothiohydroperoxy, –SSeH; etc.
 * Method (1) leads to preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.4.2.2', [
  { formula: 'HOO-CH2-CH2-OH', pin: '2-hydroperoxyethan-1-ol' },
  { formula: 'HSS-CH2-COOH', pin: 'disulfanylacetic acid', otherNames: ['(dithiohydroperoxy)acetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630402b.gif', pin: '3,4-bis(disulfanyl)benzamide', otherNames: ['3,4-bis(dithiohydroperoxy)benzamide'] },
  { formula: 'HS-O-CH2-CH2-CN', pin: '3-(sulfanyloxy)propanenitrile', otherNames: ['3-(SO-thiohydroperoxy)propanenitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630402c.gif', pin: '4-[(hydroxyselanyl)methyl]benzoic acid', otherNames: ['4-[(OSe-selenohydroperoxy)methyl]benzoic acid'] },
]);
