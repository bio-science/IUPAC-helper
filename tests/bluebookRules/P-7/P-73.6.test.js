/**
 * P-73.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CATIONIC PREFIX NAMES
 * A polycation in which all cationic centers cannot be included in the cationic parent hydride or
 * cationic parent compound is named by selecting one part of the structure as the parent cation and
 * citing the other part(s) as cationic substituent prefixes. The selection of the parent cation is
 * achieved by using the criteria for selecting the cationic parent structure. …
 * Two methods are used to name substituent structural units containing cationic centers:
 * (1) all prefix names are formed by adding the suffixes ‘yl’, ‘ylidene’, etc. to the cation name,
 * preceded by the multiplying prefixes ‘di’, ‘tri’, etc. …
 * (2) prefixes for expressing a monovalent substituent derived from a mononuclear parent cation
 * denoted by ‘ium’ or by ‘onium’ described in Table 7.3 are formed by changing the ‘onium’ ending of
 * the …
 * Method (1) leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1105, P-73.6, example 8. [corrected 17 June 2020]
 *     For dimethylazaniumylidene (preferred prefix)
 *     read N-methylmethanaminiumylidene (preferred prefix)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.6', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600a.gif', preselectedPrefix: 'azaniumyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600b.gif', preselectedPrefix: 'triaz-2-en-1-ium-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600c.gif', preferredPrefix: 'ethan-1-ium-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600d.gif', preferredPrefix: '2-methylpropan-2-ylium-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600e.gif', preselectedPrefix: 'selaniumyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600f.gif', preferredPrefix: 'methylsulfaniumdiyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600g.gif', preselectedPrefix: 'diazyn-1-ium-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600h.gif', preferredPrefix: 'N-methylmethanaminiumylidene', notNames: ['dimethylammoniumylidene', 'dimethylimmonio'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600i.gif', preferredPrefix: 'pyridin-1-ium-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73600j.gif', preferredPrefix: '1-methylpyridin-1-ium-4-yl' },
]);
