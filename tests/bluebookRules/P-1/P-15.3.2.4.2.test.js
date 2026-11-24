/**
 * P-15.3.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When conditions (1) and (2) as defined in P-15.3.2.4.1, above, are not met, the substituent groups
 * other than those identified by suffixes, if present, are cited as prefixes at the front of the name
 * of the assembly. These prefixes are assigned the lowest locants available after priority has been
 * given to the principal characteristic groups and the linking multiplicative substituent groups. Such
 * names are not acceptable as preferred IUPAC names but may be used in general nomenclature; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 84, P-15.3.2.4.2, example 1 on this page. [corrected 30 January 2019]
 *     For [(2-chlorosilyl)ethyl]silane
 *     read [2-(chlorosilyl)ethyl]silane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.2.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bj.gif', pin: '4-chloro-2-[(3-cyanophenyl)methyl]benzonitrile', otherNames: ['4-chloro-2,3′-methylenedibenzonitrile'], notNames: ['3-[(5-chloro-2-cyanophenyl)methyl]benzonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bk.gif', pin: '4-chloro-2-[2-(4-chloro-3-hydroxyphenyl)ethyl]phenol', otherNames: ['4,6′-dichloro-2,3′-(ethane-1,2-diyl)diphenol'], notNames: ['2-chloro-5-[2-(5-chloro-2-hydroxyphenyl)ethyl]phenol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bl.gif', pin: 'chloro(2-silylethyl)silane', otherNames: ['1-chloro-1,1′-(ethane-1,2-diyl)bis(silane)'], notNames: ['[2-(chlorosilyl)ethyl]silane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bm.gif', pin: '2-(disilanyldisulfanyl)-1,1,1-trimethyldisilane', otherNames: ['2,2,2-trimethyl-1,1′-(disulfanediyl)bis(disilane)'], notNames: ['[2-(2,2,2-trimethyldisilan-1-yl)disulfanyl]disilane', '6,6-dimethyl-3,4-dithia-1,2,5,6-tetrasilaheptane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bn.gif', pin: '2-chloro-4-[(5-chloropyridin-2-yl)oxy]pyridine', otherNames: ['2′,5-dichloro-2,4′-oxydipyridine'], notNames: ['5-chloro-2-[(2-chloropyridin-4-yl)oxy]pyridine'] },
]);
