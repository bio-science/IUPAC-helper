/**
 * P-93.5.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of double bonds
 * As described for cycloalkenes (see P-93.5.1.4.1), in unsaturated bicyclo[3.3.3]undecane and smaller
 * systems, it is not necessary to identify the configuration of double bonds as ‘Z’. All double bonds
 * in larger systems need to be specified as ‘Z’ or ‘E’.
 * Cumulene systems included in cyclic systems are treated as discussed in P-93.4.2.2 and P-93.4.2.3
 * and numbered according to the numbering of the cyclic system. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1258, P-93.5.2.3, example 1 on this page. [corrected 2 January 2019]
 *     Add (1S,4E,12R)-bicyclo[10.2.2]hexadeca-4,13-diene >
 *   Page 1258, P-93.5.2.3, example 3 on this page (second cumulene). [corrected 31 October 2018]
 *     For [2S,26R,1(44)E]-bicyclo[24.20.1]heptatetraconta-1(46),44,45-trien-2-ol (PIN)
 *     read [1(44)E,2S,26R]-bicyclo[24.20.1]heptatetraconta-1(46),44,45-trien-2-ol (PIN)
 *   Page 1258, P-93.5.2.3, last example on this page. [modified 7 November 2018]
 *     For [1(43)P,2R,25R)-bicyclo[23.19.1]pentatetraconta-1(44),43-diene-2-carboxylic acid (PIN)
 *     read [1(43)P,2R,25R]-bicyclo[23.19.1]pentatetraconta-1(44),43-diene-2-carboxylic acid (PIN)
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93523a.gif', pin: 'bicyclo[2.2.1]hept-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93523b.gif', pin: 'bicyclo[2.2.2]octa-2,5,7-triene' },
]);
