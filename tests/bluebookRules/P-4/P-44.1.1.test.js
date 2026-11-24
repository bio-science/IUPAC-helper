/**
 * P-44.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior parent structure has the maximum number of substituents corresponding to the principal
 * characteristic group (suffix) or senior parent hydride in accord with the seniority of classes
 * (P-41) and the seniority of suffixes (P-43).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 449, P-44.1.1, example 1 on this page. [modified 1 January 2020]
 *     For
 *     4-[4-(pyridin-4-ylmethyl)phenyl]-1,7(1),3(1,3),5(1,4)-tetrabenzenaheptaphane-1⁴,7⁴-dicarboxylic
 *     acid (PIN)
 *     read
 *     4-{4-[(pyridin-4-yl)methyl]phenyl}-1,7(1),3(1,3),5(1,4)-tetrabenzenaheptaphane-1⁴,7⁴-dicarboxylic
 *     acid (PIN)
 *     for [not
 *     4-{[3-(3-carboxyphenyl)methyl]phenyl}-1(4)-pyridina-7(1),3(1,4),5(1,3)-tribenzenaheptaphane-7⁴-carboxylic
 *     acid;
 *     there are two of the principal characteristic group in the PIN and only one in the other name]
 *     read [not
 *     4-{[4-(4-carboxyphenyl)methyl]phenyl}-1(4)-pyridina-3(1,4),5(1,3),7(1)-tribenzenaheptaphane-7⁴-carboxylic
 *     acid;
 *     nor
 *     4-{[3-(4-carboxyphenyl)methyl]phenyl}-1(4)-pyridina-3,5(1,4),7(1)-tribenzenaheptaphane-7⁴-carboxylic
 *     acid;
 *     there are two of the principal characteristic group in the PIN and only one in the other names]
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440101a.gif', pin: '3-cyclohexylpropanoic acid', otherNames: ['cyclohexanepropanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440101b.gif', pin: '3-propylbenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440101c.gif', pin: '3-(4-chlorobutyl)pentane-1,4-diol', notNames: ['7-chloro-3-(1-hydroxyethyl)heptan-1-ol', '3-(4-chlorobutyl)pentane-2,5-diol'] },
  { formula: 'NH2-NH-COOH', pin: 'hydrazinecarboxylic acid' },
  { formula: 'H3Si-CH2-CH2-COOH', pin: '3-silylpropanoic acid' },
  { formula: 'HOOC-SiH2-CH2-CH3', pin: 'ethylsilanecarboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440101d.gif', pin: '7,7-bis[(2-butoxyethoxy)methyl]-3,6,10,13-tetrathiapentadecane-1,15-dioic acid', notNames: ['9-[(2-butoxyethoxy)methyl]-9-({2-[(carboxymethyl)sulfanyl]ethyl}sulfanyl)-11,14-dioxa-3,6-dithiaoctadecan-1-oic acid'] },
  { formula: 'H3Si-CH2-CH2-SiH2-CH2-CH2-SiH3', notNames: ['bis(2-silylethyl)silane'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440101e.gif', pin: '4-{4-[(pyridin-4-yl)methyl]phenyl}-1,7(1),3(1,3),5(1,4)-tetrabenzenaheptaphane-1⁴,7⁴-dicarboxylic acid', notNames: ['4-{[4-(4-carboxyphenyl)methyl]phenyl}-1(4)-pyridina-3(1,4),5(1,3),7(1)-tribenzenaheptaphane-7⁴-carboxylic acid'] },
]);
