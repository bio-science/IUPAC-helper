/**
 * P-93.4.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of configuration in compounds with multiple stereogenic units
 * When chiral compounds contain multiple double bonds, >C=C<, stereodescriptors are assigned as
 * described above. Stereodescriptors are cited at the front of the name or of any substituent group or
 * appropriate portion of the name, in ascending order of the locants. For a discussion about the
 * nomenclature of these unsaturated compounds, see P-92.4.2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1240, P-93.4.2.4, example 1 on this page. [corrected 10 April 2019]
 *     For (5S,6-cis,8-trans,10-trans,12R,14-cis)-5,12-dihtydroxyicosa-6,8,10,14-tetraenoic acid
 *     read 6-cis,8-trans,10-trans,14-cis-(5S,12R)-5,12-dihtydroxyicosa-6,8,10,14-tetraenoic acid
 *   Page 1240, P-93.4.2.4, example 2 on this page. [corrected 10 April 2019]
 *     For (2R)-3-hydroxypropane-1,2-diyl di[(3-trans,5-trans)-hepta-3,5-dienoate]
 *     read (2R)-3-hydroxypropane-1,2-diyl di(3-trans,5-trans-hepta-3,5-dienoate)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.4.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93424a.gif', name: '6-cis,8-trans,10-trans,14-cis-(5S,12R)-5,12-dihydroxyicosa-6,8,10,14-tetraenoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93424d.gif', name: 'simplified digraph' },
]);
