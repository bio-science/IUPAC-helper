/**
 * P-62.2.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Complex polyamines, i.e., compounds in which a choice between two or more parent hydrides must be
 * made, are systems composed of two or more secondary and/or tertiary amines.
 * In complex polyamines a senior parent amine structure must be chosen. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 677, P-62.2.4.1.3, example 2. [corrected 24 October 2018]
 *     Replace the structure with:
 *   Page 678, P-62.2.4.1.3, example 1 on this page. [modified 27 February 2019]
 *     For N¹,N¹′-(azanediyldiethane-2,1-diyl)di(ethane-1,2-diamine) [PIN;...
 *     read N¹,N¹′-[azanediyldi(ethane-2,1-diyl)]di(ethane-1,2-diamine) [PIN;...
 *     delete N¹-(2-aminoethyl)-N²-{2-[(aminomethyl)amino]ethyl}ethane-1,2-diamine
 *     (substitutive name; alphabetically inferior to the first substitutive name]
 *   Page 678, P-62.2.4.1.3, example 3 on this page. [corrected 27 February 2019]
 *     For N¹,N²-{2-[(2-aminoethyl)amino]ethyl}ethane-1,2-diamine
 *     read N¹,N²-bis{2-[(2-aminoethyl)amino]ethyl}ethane-1,2-diamine >
 *   Page 679, P-62.2.4.1.3, example on this page. [corrected 27 February 2019]
 *     For N¹-(4-aminophenyl)-N¹,N¹′-(azanediyldi-1,4-phenylene)di(benzene-1,4-diamine)
 *     read N¹-(4-aminophenyl)-N¹,N¹′-(azanediyldi-4,1-phenylene)di(benzene-1,4-diamine)
 *     Add N⁴-[4-(4-aminoanilino)phenyl]-N¹,N¹-bis(4-aminophenyl)benzene-1,4-diamine
 *   Page 679, P-62.2.4.1.3, example on this page [corrected 9 April 2025]
 *     For N¹-(4-aminophenyl)- N¹,N¹′-(azanediyldi-4,1-phenylene)di(benzene-1,4-diamine)
 *     read N¹-(4-aminophenyl)- N¹,N¹′-[azanediyldi(4,1-phenylene)]di(benzene-1,4-diamine)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.4.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204k.gif', pin: 'N¹-(aminomethyl)ethane-1,2-diamine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204l.gif', pin: 'N¹-(2-aminoethyl)-N¹,N²,N²-trimethylethane-1,2-diamine', notNames: ['N¹,N¹-dimethyl-2,2′-(methylazanediyl)di(ethan-1-amine)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204m.gif', pin: 'N¹,N¹′-[azanediyldi(ethane-2,1-diyl)]di(ethane-1,2-diamine)', otherNames: ['N¹-(2-aminoethyl)-N²-{2-[(2-aminoethyl)amino]ethyl}ethane-1,2-diamine'], notNames: ['2,2′-azanediylbis[N-(2-aminoethyl)ethan-1-amine] [substitutive name'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204n.gif', pin: 'N¹-{2-[(2-aminoethyl)amino]ethyl}-N²-(aminomethyl)ethane-1,2-diamine', notNames: ['N²-(aminomethyl)-N¹-{2-[(2-aminoethyl)amino]ethyl}ethane-1,2-diamine', 'N¹-(2-aminoethyl)-N²-(aminomethyl)-2,2′-azanediyldi(ethan-1-amine)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204o.gif', pin: '3,6,9,12-tetraazatetradecane-1,14-diamine', otherNames: ['N¹,N²-bis{2-[(2-aminoethyl)amino]ethyl}ethane-1,2-diamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204p.gif', pin: 'N¹,N¹′-[1,4-phenylenedi(ethane-2,1-diyl)]di(propane-1,3-diamine)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204q.gif', pin: 'N¹-(4-aminophenyl)-N⁴-phenylbenzene-1,4-diamine', notNames: ['N¹-(4-anilinophenyl)benzene-1,4-diamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620204r.gif', pin: '2-(4-aminophenyl)-2,4,6-triaza-1,7(1),3,5(1,4)-tetrabenzenaheptaphane-1⁴,7⁴-diamine', otherNames: ['N¹,N¹-bis(4-aminophenyl)-N⁴-{4-[(4-aminophenyl)amino]phenyl}benzene-1,4-diamine', 'N¹-(4-aminophenyl)-N¹,N¹′-[azanediyldi(4,1-phenylene)]di(benzene-1,4-diamine)', 'N⁴-[4-(4-aminoanilino)phenyl]-N¹,N¹-bis(4-aminophenyl)benzene-1,4-diamine'] },
]);
