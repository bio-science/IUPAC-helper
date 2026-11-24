/**
 * P-71.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl radicals
 * Acyl radicals, i.e., radicals with at least one chalcogen or nitrogen atom attached to a radical
 * center by a (formal) double bond, which may be considered to be formally derived by the removal of a
 * hydroxy group from acid characteristic groups, are named by replacing the ‘ic acid’ or ‘carboxylic
 * acid’ ending of the name of the acid with ‘oyl’ or ‘yl’, or ‘carbonyl’, according to the method for
 * forming names of acyl groups (see P-65.1.7). …
 * Compound acyl radicals formed from acyclic parent hydrocarbons and substituent prefixes such as
 * ‘oxo’, ‘thioxo’, ‘sulfanylidene’, and ‘imino’ can be used in general nomenclature; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1058, P-71.3.1, example 2. [corrected 12 June 2019]
 *     For dimethyloxo-λ⁵-phosphanyl
 *     read dimethyl(oxo)-λ⁵-phosphanyl
 *   Page 1058, P-71.3.1, example 6. [modified 7 August 2019]
 *     For 1,4-phenylenebis(oxo-λ⁴-sulfanyl)
 *     read (1,4-phenylene)bis(oxo-λ⁴-sulfanyl)
 *     replace the structure with:
 *   Page 1058, P-71.3.1, example 8. [corrected 7 August 2019]
 *     For 1,4-phenylenebis(oxomethyl)
 *     read (1,4-phenylene)bis(oxomethyl)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310a.gif', pin: 'hexanoyl', otherNames: ['1-oxohexyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310b.gif', pin: 'dimethylphosphinoyl', otherNames: ['dimethyl(oxo)-λ⁵-phosphanyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310c.gif', pin: 'ethanethioyl', otherNames: ['1-sulfanylideneethyl', '1-thioxoethyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310d.gif', pin: 'butanimidoyl', otherNames: ['1-iminobutyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310e.gif', pin: 'benzoyl', otherNames: ['benzenecarbonyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310f.gif', name: 'benzene-1,4-disulfinyl (PIN) (1,4-phenylene)bis(oxo-λ⁴-sulfanyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310g.gif', pin: 'cyclohexanecarbonyl', otherNames: ['cyclohexyl(oxo)methyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71310h.gif', pin: 'benzene-1,4-dicarbonyl', otherNames: ['terephthaloyl'] },
]);
