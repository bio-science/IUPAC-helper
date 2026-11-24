/**
 * P-67.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of polynuclear noncarbon oxoacids that cannot be formed on the basis of fundamental oxoacids
 * are either named by using class names, such as anhydrides, or they are formed substitutively.
 * Anhydride names are preferred to substitutive names.
 * Some names are also included in this Section because their structure does not correspond to the name
 * implied by a diacid or a hypodiacid, for example the name ‘disulfurous acid’, exemplified below.
 * Names of derivatives of acids that cannot be formed directly by functional replacement are generated
 * by substitution of acids with preferred names such as phosphonic acid and phosphinic acid; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 961, P-67.3.1, lines 9-13. [corrected 20 March 2019]
 *     For ...acids, acid halides, azides, amides, hydrazides, cyanides, isocyanides, isocyanates (and
 *     chalcogen analogues in the order O > S > Se > Te), imides, and nitrides and the maximum number
 *     of groups representing senior classes.
 *     read ...acids, acid halides, azides, cyanides, isocyanides, isocyanates (and chalcogen analogues
 *     in the order O > S > Se > Te), amides, hydrazides, and the maximum number of groups representing
 *     the senior class (see P-67.1.2.3.2).
 *   Page 962, P-67.3.1, example 5 on this page. [corrected 25 August 2016]
 *     For bis(trimethylphosphanyl)phosphinous acid (PIN)
 *     read bis(dimethylphosphanyl)phosphinous acid (PIN)
 *   Page 962, P-67.3.1, example 6 on this page. [corrected 25 August 2016]
 *     For (not orthosulfurodiiodidothiocyanatous acid)
 *     read (not orthosulfurodiiodidothiocyanatidous acid)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67310a.gif', preselectedName: '{[amino(hydroxy)phosphanyl]oxy}phosphonamidic acid', otherNames: ['phosphoramidic phosphoramidous monoanhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67310b.gif', preselectedName: 'phosphorodiamidic phosphorodiamidous anhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67310c.gif', name: 'arsoric phosphoric thiomonoanhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67310d.gif', preselectedName: 'N-(hydroxyphosphonoyl)phosphoramidic acid' },
  { formula: '(CH3-O)2P(O)-O-HP(O)-O-CH3', pin: 'methyl [(dimethoxyphosphoryl)oxy]phosphonate' },
  { formula: '(CH3)2P-P(OH)-P(CH3)2', pin: 'bis(dimethylphosphanyl)phosphinous acid', notNames: ['1,1,3,3-tetramethyltriphosphan-2-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67310e.gif', pin: '1-hydroxy-1,1-diiodo-1λ⁴-disulfane-2-carbonitrile', notNames: ['orthosulfurodiiodidothiocyanatidous acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67310f.gif', pin: 'methyl hydrogen {[ethoxy(hydroxy)boranyl]oxy}phosphonate' },
  { formula: 'CH3-CO-O-P(O)(OH)2', name: 'acetic phosphoric monoanhydride' },
  { formula: 'HO-SeO2-O-SO2-OH', preselectedName: 'selenic sulfuric anhydride' },
  { formula: 'CH3-CH2-CO-O-B(OH)2', name: 'boric propanoic monoanhydride' },
  { formula: 'CH3-CO-O-CO-O-CO-OH', pin: '{[(acetyloxy)carbonyl]oxy}formic acid', otherNames: ['acetic dicarbonic monoanhydride'] },
]);
