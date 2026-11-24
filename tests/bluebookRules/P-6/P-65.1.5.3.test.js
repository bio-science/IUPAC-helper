/**
 * P-65.1.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional replacement in peroxycarboxylic acids
 * Peroxy acid suffixes can be modified by S, Se, and Te using functional replacement nomenclature.
 * Italic prefixes in front of the term ‘acid’ are used for specificity, where necessary (see Table 4.3
 * for more suffixes modified by functional replacement and their seniority order). Preferred names are
 * all formed by using appropriate suffixes and parent hydrides, even in the case of derivatives of
 * formic acid, acetic acid, and benzoic acid.
 * The use of systematic substitutive names for chalcogen analogues of peroxycarboxylic acids is a
 * change for formic acid, acetic acid, benzoic acid, and oxalic acid.
 * –COS2H dithiocarboperoxoic acid (preferred suffix; location of sulfur atom unknown)
 * The recommended suffixes, and their seniority order, are fully discussed in Section P-43.
 * Compound prefixes, such as ‘sulfanyloxy’ and ‘oxo’ and ‘hydroxysulfanyl’ and ‘sulfanylidene’ at the
 * end of acyclic chains are used to generate preferred IUPAC names. …
 * Prefixes derived by functional replacement nomenclature have only limited use because there is no
 * accepted method to unambiguously describe precise structures of thioperoxy groups.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 767, P-65.1.5.3, example 1 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.5.3', [
  { formula: 'CH3-CO-OSH', pin: 'ethane(thioperoxoic) OS-acid', notNames: ['peroxythioacetic OS-acid'] },
  { formula: 'C6H5-CO-SOH', pin: 'benzenecarbo(thioperoxoic) SO-acid', notNames: ['peroxothiobenzoic SO-acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105r.gif', pin: 'naphthalene-2-carboperoxothioic acid', notNames: ['peroxythio-2-naphthoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105s.gif', pin: '4-sulfanylidene-4-(sulfanyloxy)butanoic acid', otherNames: ['3-[(SO-thiohydroperoxy)carbonothioyl]propanoic acid'], notNames: ['3-carbono(thioperoxo)thioylpropanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105t.gif', pin: '3-(dithiocarbonoperoxoyl)propanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105u.gif', pin: '4-[(hydroxysulfanyl)carbonyl]cyclohexane-1-carboxylic acid', otherNames: ['4-[(OS-thiohydroperoxy)carbonyl]cyclohexanecarboxylic acid'] },
]);
