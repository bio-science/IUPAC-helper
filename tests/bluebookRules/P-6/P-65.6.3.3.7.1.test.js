/**
 * P-65.6.3.3.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “With the exception of retained names, polycarbonic acids and cyanic acid that are described in
 * P-65.6.3.3.7.2, names of esters are all derived from acids modified by functional replacement whose
 * substitutive names are systematically formed, as indicated in sections P-65.1.3 through P-65.1.7.
 * Structural specification for esters of thio-, seleno- or tellurocarboxylic acids, thio-, seleno-, or
 * tellurosulfonic acids and sulfinic acids and their peroxy analogues is provided by the appropriate …
 * In the presence of a characteristic group having seniority for citation as suffix, an ester group is
 * indicated by preferred prefixes in accordance with the type of attachment of the substituent …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 819, P-65.6.3.3.7.1, example 6 on this page. [corrected 24 June 2020]
 *     For 2-[(propanimidoyl)selanyl]benzene-1-carboximidic acid (PIN)
 *     read 2-(propanimidoylselanyl)benzene-1-carboximidic acid (PIN)
 *   Page 819, P-65.6.3.3.7.1, example 8 on this page. [corrected 24 October 2018]
 *     Replace the structure with:
 *   Page 819, P-65.6.3.3.7.1, example 9 on this page. [corrected 24 October 2018]
 *     Replace the structure with:
 *   Page 820, P-65.6.3.3.7.1, example on this page. [corrected 28 October 2016]
 *     For O-methyl 2-{4-[(2-methoxy-2-oxoethanethioyl)oxy]phenoxy}-2-oxoethanethioate (PIN)
 *     read [not O-methyl (4-{[methoxy(oxo)ethanethioyl]oxy}phenoxy)(oxo)ethanethioate; a carboxylic
 *     acid is preferred to a thiocarboxylic acid]
 *     for [not methyl 2-{4-[(2-methoxy-2-sulfanylideneacetyl)oxy]phenoxy}-2-sulfanylideneacetate; the
 *     PIN is lower in alphanumerical order)
 *     read [not methyl (4-{[methoxy(sulfanylidene)acetyl]oxy}phenoxy)(sulfanylidene)acetate; the PIN
 *     is lower in alphabetical order]
 *     Add 4-{[methoxy(oxo)ethanethioyl]oxy}phenyl methoxy(sulfanylidene)acetate (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.7.1', [
  { formula: 'CH3-[CH2]4-CO-S-CH2-CH3', pin: 'S-ethyl hexanethioate' },
  { formula: 'CH3-[CH2]4-CSe-O-CH2-CH3', pin: 'O-ethyl hexaneselenoate' },
  { formula: 'CH3-C(=NH)-O-CH3', pin: 'methyl ethanimidate', otherNames: ['methyl acetimidate'] },
  { formula: 'CH3-CH2-C(=N-NH2)-O-C2H5', pin: 'ethyl propanehydrazonate', otherNames: ['ethyl propionohydrazonate'] },
  { formula: 'C6H5-C(=NH)-S-CH3', pin: 'methyl benzenecarboximidothioate' },
  { formula: 'C6H5-C(=N-SH)-S-CH2-CH3', pin: 'ethyl N-sulfanylbenzenecarboximidothioate' },
  { formula: 'C6H5-CO-S-O-CH3', pin: 'SO-methyl benzene(carbothioperoxoate)' },
  { formula: 'CH3-CH2-SO2-O-S-C2H5', pin: 'OS-ethyl ethanesulfono(thioperoxoate)' },
  { formula: 'CH3-S-CO-CO-S-CH3', pin: 'S,S-dimethyl ethanebis(thioate)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bh.gif', pin: '4-(methylsulfanyl)-4-sulfanylidenebutanethioic S-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bi.gif', pin: '2-(propanimidoylselanyl)benzene-1-carboximidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bj.gif', pin: '2-[(methylsulfanyl)carbonothioyl]benzene-1-carboximidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bk.gif', pin: 'O-methyl (ethylsulfanyl)(imino)ethanethioate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bl.gif', pin: 'S-methyl (ethylsulfanyl)(sulfanylidene)ethanethioate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bm.gif', pin: '4-{[methoxy(oxo)ethanethioyl]oxy}phenyl methoxy(sulfanylidene)acetate', notNames: ['O-methyl (4-{[methoxy(oxo)ethanethioyl]oxy}phenoxy)(oxo)ethanethioate', 'methyl (4-{[methoxy(sulfanylidene)acetyl]oxy}phenoxy)(sulfanylidene)acetate'] },
]);
