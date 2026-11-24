/**
 * P-65.1.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional replacement in systematic names of carboxylic acids
 * Replacement of oxygen atom(s) of a carboxylic acid group by another chalcogen is indicated by the
 * affixes ‘thio’, ‘seleno’, and ‘telluro’. These names do not differentiate between tautomeric forms
 * of mixed chalcogen acids; such nonspecificity may be shown in a structure such as:
 * In names, tautomeric groups in mixed chalcocarboxylic acids, such as –CO-SH or –CS-OH, –S(O)-SH or
 * –S(S)-OH, are distinguished by prefixing italic element symbols, such as O or S, respectively, to …
 * When the position of chalcogen atoms is undetermined, the prefix for the unmodified acid, i.e. …
 * When the position of chalcogen atoms is known, combinations of prefixes such as ‘hydroxy- and
 * sulfanylidene-’ or ‘sulfanyl- and oxo-’ are used in acyclic compounds. …
 * The seniority order between acids and acids modified by functional replacement is discussed in P-43
 * and expressed in Table 4.3. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 763, P-65.1.5.1, example 4. [corrected 9 January 2019]
 *     For H{S,O}C-CH2-CH2-CH2-CH2-C{O/S}H
 *     read H{S/O}C-CH2-CH2-CH2-CH2-C{O/S}H
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.5.1', [
  { formula: 'CH3-CH2-CH2-CH2-CH2-CS-OH', pin: 'hexanethioic O-acid' },
  { formula: 'CH3-CH2-CH2-CH2-CH2-C{S/Se}H', pin: 'hexaneselenothioic acid' },
  { formula: 'CH3-CH2-CH2-CH2-CH2-CSe-SH', pin: 'hexaneselenothioic S-acid' },
  { formula: 'H{S/O}C-CH2-CH2-CH2-CH2-C{O/S}H', pin: 'hexanebis(thioic acid)' },
  { formula: 'HS-SC-CH2-CH2-CH2-CH2-CS-SH', pin: 'hexanebis(dithioic acid)' },
  { formula: 'CH3-CH2-CH2-CH2-CH2-C{O/Se}H', pin: 'hexaneselenoic acid' },
  { formula: 'H{S/O}C-CH2-CH2-C{O/S}H', pin: 'butanebis(thioic acid)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105b.gif', pin: 'piperidine-1-carbodithioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105c.gif', pin: 'cyclohexanecarboselenothioic Se-acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105d.gif', pin: '4-(ethanethioyl)benzoic acid', otherNames: ['4-(thioacetyl)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105e.gif', pin: '5-(thiocarboxy)pentanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105f.gif', pin: '4-oxo-4-sulfanylbutanoic acid', otherNames: ['3-(sulfanylcarbonyl)propanoic acid'] },
  { formula: 'HO-CS-CH2-CH2-COOH', pin: '4-hydroxy-4-sulfanylidenebutanoic acid' },
  { formula: 'HS-CO-COOH', pin: 'oxo(sulfanyl)acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105g.gif', pin: '4-(hydroxycarbonothioyl)pyridine-2-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105h.gif', pin: '4-(sulfanylcarbonyl)pyridine-2-carboxylic acid' },
  { formula: 'CH3-CH2-C(=NH)-SH', pin: 'propanimidothioic acid' },
  { formula: 'CH3-CH2-CH2-C(=NNH2)-SeH', pin: 'butanehydrazonoselenoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105i.gif', pin: 'N-sulfanylcyclopentanecarboximidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105j.gif', pin: 'N-hydroxycyclohexanecarboximidoselenoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650105k.gif', pin: '3-amino-3-(ethylsulfanyl)prop-2-ene(dithioic acid)' },
]);
