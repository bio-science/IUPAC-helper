/**
 * P-65.1.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional replacement in retained names of carboxylic acids
 * Preferred names of chalcogen analogues of monocarboxylic acids are formed using the suffixes ‘thioic
 * acid’, ‘selenoic acid’, ‘telluroic acid’ or ‘carbothioic acid’, ‘carboselenoic acid’,
 * ‘carbotelluroic acid’ and names of appropriate parent hydrides, even in the case of formic acid,
 * acetic acid, and benzoic acid.
 * The use of systematic substitutive names for chalcogen analogues of monocarboxylic acids is a change
 * for formic acid, acetic acid, benzoic acid, oxalic acid, and oxamic acid.
 * Chalcogen analogues of monocarboxylic acids with retained names may also be named by placing the
 * prefix ‘thio’, ‘seleno’, or ‘telluro’ in front of the name of the acid.
 * Chalcogen analogues of dicarboxylic acids are named systematically; retained names are not used for
 * naming chalcogen analogues of dicarboxylic acids.
 * The symbols O, S, Se, and Te are used to specify the structure of the acid, as indicated in
 * P-65.1.5.1.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 765, P-65.1.5.2, example 4. [modified 5 June 2019]
 *     For 3-amino-2,3-dioxopropanethoic (O,S)-acid (PIN)
 *     read 3-amino-2,3-dioxopropanethoic acid (PIN)
 *     for H2N-CO-CO-C(S/O)-OH
 *     read H2N-CO-CO-C{O/S}H
 *   Page 765, P-65.1.5.2, example 8. [corrected 19 September 2018]
 *     For hydroxyl(sulfanylidene)acetic acid (PIN)
 *     read hydroxy(sulfanylidene)acetic acid (PIN)
 *   Page 765, P-65.1.5.2, example 11. [corrected 6 March 2019]
 *     For (not 1-selenophthalic Se-acid)
 *     read (not selenoterephthalic Se-acid)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.5.2', [
  { formula: 'CH3-CS-OH', pin: 'ethanethioic O-acid', otherNames: ['thioacetic O-acid'] },
  { formula: 'C6H5-C{O/Se}H', pin: 'benzenecarboselenoic acid', otherNames: ['selenobenzoic acid'] },
  { formula: 'HCO-SH', pin: 'methanethioic S-acid', otherNames: ['thioformic S-acid'] },
  { formula: 'H2N-CO-CO-C{O/S}H', pin: '3-amino-2,3-dioxopropanethioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105l.gif', pin: '4-(thiocarboxy)butanoic acid', notNames: ['thioglutaric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105m.gif', pin: '4-oxo-4-sulfanylbutanoic acid', notNames: ['thiosuccinic acid'] },
  { formula: 'HO-CS-COOH', pin: 'hydroxy(sulfanylidene)acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105n.gif', pin: 'benzene-1,2-dicarbothioic acid', notNames: ['1,2-dithiophthalic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105o.gif', pin: '2-(thiocarboxy)benzene-1-carbothioic S-acid', notNames: ['1,2-dithiophthalic S-acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105p.gif', pin: '4-(selanylcarbonyl)benzoic acid', notNames: ['selenoterephthalic Se-acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105q.gif', pin: 'benzene-1,2-dicarbodithioic acid', notNames: ['tetrathiophthalic acid'] },
  { formula: 'HS-CS-CS-SH', pin: 'ethanebis(dithioic acid)', notNames: ['tetrathiooxalic acid'] },
]);
