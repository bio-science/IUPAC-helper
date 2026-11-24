/**
 * P-74.2.2.1.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Thioaldehyde S-oxides, thioketone S-oxides, and heterone S-oxides have the following delocalized
 * general structure:
 * Method (4) in P-74.2.2.1 gives preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1117, P-74.2.2.1.8, example 2. [modified 27 March 2019]
 *     For 1λ⁴-thiophen-1-one (PIN)
 *     read 1H-1λ⁴-thiophen-1-one (PIN)
 *     for 1-oxo-1λ⁴-thiophene
 *     read 1-oxo-1H-1λ⁴-thiophene
 *   Page 1118, P-74.2.2.1.8, example on this page. [modified 27 March 2019]
 *     For 1λ⁴,2-thiazin-1-one (PIN)
 *     read 1H-1λ⁴,2-thiazol-1-one (PIN)
 *     for 1,2-thiazine 1-oxide
 *     read 1,2-thiazole 1-oxide
 *     for 1,2-thiazine S-oxide
 *     read 1,2-thiazole S-oxide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.1.8', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221h.gif', pin: 'propylidene-λ⁴-sulfanone', otherNames: ['propanethial oxide', '1-(oxo-λ⁴-sulfanylidene)propane'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221i.gif', pin: '1H-1λ⁴-thiophen-1-one', otherNames: ['thiophene oxide', '1-oxo-1H-1λ⁴-thiophene'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221j.gif', pin: '1H-1λ⁴,2-thiazol-1-one', otherNames: ['1,2-thiazole 1-oxide', '1,2-thiazole S-oxide'] },
]);
