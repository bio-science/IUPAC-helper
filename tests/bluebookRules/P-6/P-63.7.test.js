/**
 * P-63.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “POLYFUNCTIONAL COMPOUNDS
 * In the order of seniority of classes, hydroxy compounds and hydroperoxides are ranked in descending
 * order after aldehydes and ketones, but before amines and imines. Chalcogen analogues are ranked
 * after each of these classes, according to the number of O, S, Se and Te atoms. In descending order,
 * they are as follows.
 * (1) hydroxy compounds –OH, then their chalcogen analogues, –SH > –SeH > –TeH
 * (2) hydroperoxides –OOH, then their chalcogen analogues, –SOH > –SeOH > –TeOH, etc. (see Table 6.1)
 * (3) amines > imines
 * (4) ethers, –O–, then their chalcogen analogues, –S– > –Se– > –Te–
 * (5) peroxides –OO–, then their chalcogen analogues, –OS– > –OSe– > –OTe–, > –SS– > –SSe– > –STe– >
 * –SeSe– > –SeTe– > –TeTe–.
 * There is no seniority order between phenols and hydroxy compounds. The choice for parent hydride is
 * decided by the maximum number of hydroxy groups cited as suffixes; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 717, P-63.7, example 8 on this page. [modified 7 November 2018]
 *     For 2 -(ethylperoxy)-1-methoxyethane
 *     read 1-(ethylperoxy)-2-methoxyethane. [Deleted space from name and correct locants]
 *     for (not [2-(methoxyethyl)peroxy]ethane;...
 *     read {not [(2-methoxyethyl)peroxy]ethane;...
 *     replace structure with:
 *   Page 717, P-63.7, example 9 on this page. [modified 5 June 2019]
 *     For 1-methoxy 3-(methylthio)propane
 *     read 1-methoxy-3-(methylthio)propane
 *     replace structure with:
 *   Page 718, P-63.7, example 1 on this page . [corrected 27 February 2019]
 *     For ... nor 1-methyl-2-[1-(methylsulfanyl)pent-1-en-1-yl]disulfane; ...
 *     read ... nor methyl[1-(methylsulfanyl)pent-1-en-1-yl]disulfane; ...
 *   Page 718, P-63.7, example 4 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.7', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700a.gif', pin: '2-methyl-2-(sulfanyloxy)propane-1-thiol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700b.gif', pin: '2-(2-hydroxyethyl)phenol', otherNames: ['2-(2-hydroxyphenyl)ethan-1-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700c.gif', pin: '1-(2-hydroxyphenyl)ethane-1,2-diol', notNames: ['2-(1,2-dihydroxyethyl)phenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700d.gif', pin: '2-(selanyloxy)ethane-1-peroxol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700e.gif', pin: '1-amino-2-methylpropane-2-peroxol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700f.gif', pin: '2-(methanesulfonyl)ethan-1-ol', otherNames: ['2-(methylsulfonyl)ethan-1-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700g.gif', pin: '2-[(2-hydroperoxy-1-hydroxycyclohexyl)peroxy]cyclohexan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700h.gif', pin: '2-aminoethan-1-ol', notNames: ['ethanolamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700i.gif', pin: '1-(ethylperoxy)-2-methoxyethane', notNames: ['[(2-methoxyethyl)peroxy]ethane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700j.gif', pin: '1-methoxy-3-(methylsulfanyl)propane', otherNames: ['1-methoxy-3-(methylthio)propane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700k.gif', pin: '1-(methyldisulfanyl)-1-(methylsulfanyl)pent-1-ene', otherNames: ['{not methyl 1-(methylsulfanyl)pent-1-en-1-yl disulfide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700l.gif', pin: '3-(trimethoxysilyl)propane-1-thiol', notNames: ['trimethoxy(3-sulfanylpropyl)silane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700m.gif', pin: '1-{[2-(ethylsulfanyl)-1-(propylsulfanyl)ethen-1-yl]sulfanyl}propane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700n.gif', pin: '2-[di(butan-2-yl)amino]butan-2-ol', otherNames: ['2-[bis(1-methylpropyl)amino]butan-2-ol.'], notNames: ['2-(di-sec-butylamino)butan-2-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630700o.gif', pin: '3-[amino(methyl)silyl]-3-[(aminomethyl)silyl]cyclopentan-1-ol', otherNames: ['{not 3-[(aminomethyl)silyl]-3-[amino(methyl)silyl]cyclopentan-1-ol'] },
]);
