/**
 * P-51.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the parent structure occurs more than three times and not all the occurrences are connected to
 * a single multiplicative substituent group, the identical units to be multiplied are those nearer to
 * the central unit of the multiplicative substituent group; the other parent structures are expressed
 * as substituents to the multiplicative name. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 562, P-51.3.2.2, example 1. [modified 29 January 2020]
 *     For 1,1′-oxybis(3,1-phenoxybenzene) (multiplicative name)
 *     read 1,1′-[oxybis(3,1-phenyleneoxy)]dibenzene (multiplicative name)
 *     Delete [not 1,1′-oxybis(3,1-phenyleneoxy)dibenzene (multiplicative name)
 *   Page 562, P-51.3.2.2, example 3. [modified 7 November 2018]
 *     For [not
 *     3,3′-[furan-3,4-diylbis(oxyethane-2,1-diyloxyfuran-4,3-diyloxyethane-2,1-diyloxy]difuran (a
 *     multiplicative name)]
 *     read [not
 *     3,3′-[furan-3,4-diylbis(oxyethane-2,1-diyloxyfuran-4,3-diyloxyethane-2,1-diyloxy)]difuran (a
 *     multiplicative name)]
 *     for 2,5,7,10,12,15,17,20-octaoxa-1,21(3),6,11,16,21(3,4)-pentafuranahenicosaphane (PIN, a phane
 *     name see P-51.4)
 *     read 2,5,7,10,12,15,17,20-octaoxa-1,21(3),6,11,16(3,4)-pentafuranahenicosaphane (PIN, a phane
 *     name see P-51.4, P-52.2.5)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302f.gif', pin: '2,4,6-trioxa-1,7(1),3,5(1,3)-tetrabenzenaheptaphane', otherNames: ['1,1′-[oxybis(3,1-phenyleneoxy)dibenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302g.gif', pin: '2,5,7,10,12,15-hexaoxa-1,16(3),6,11(3,4)-tetrafuranahexadecaphane', otherNames: ['3,3′-[ethane-1,2-diylbis(oxy)]bis{4-[2-(furan-3-yloxy)ethoxy]furan}'], notNames: ['3,3′-[ethane-1,2-diylbis(oxyfuran-4,3-diyloxyethane-2,1-diyloxy)]difuran (a multiplicative name)'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510302h.gif', name: '3,3′-[furan-3,4-diylbis(oxyethane-2,1-diyloxy)]bis{4-[2-(furan-3-yloxy)ethoxy]furan}', notNames: ['3,4-bis[2-({4-[2-(furan-3-yloxy)ethoxy]furan-3-yl}oxy)ethoxy]furan (a substitutive name)', '3,3′-[furan-3,4-diylbis(oxyethane-2,1-diyloxyfuran-4,3-diyloxyethane-2,1-diyloxy)]difuran (a multiplicative name)'] },
]);
