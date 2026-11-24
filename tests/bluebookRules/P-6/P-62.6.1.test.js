/**
 * P-62.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cation and anion names
 * Salts of tetravalent nitrogen R4N⁺ X⁻ (where one R group represents the parent hydride of the amine
 * or imine and the other groups are hydrogen atoms or substituent groups) are named by one of the
 * following methods:
 * (1) by adding the suffix ‘ium’ to the name of the amine or imine, with elision of the terminal
 * letter ‘e’, if present, substituent groups being cited as prefixes, and the name of the anion added
 * as a …
 * (2) by substituting the parent hydride ‘azanium’, NH4⁺;
 * (3) by substituting the parent hydride ‘ammonium’, NH4⁺, for quaternary salts only.
 * Method (1) leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 688, P-62.6.1, example 3. [modified 11 November 2020]
 *     For (2) ethyldimethylazanium iodide
 *     read (2) ethyldi(methyl)azanium iodide
 *     delete (3) ethyldimethylammonium iodide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601a.gif', pin: 'methanaminium chloride', otherNames: ['methylazanium chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601b.gif', pin: 'N-methylethanaminium bromide', otherNames: ['ethyl(methyl)azanium bromide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601c.gif', pin: 'N,N-dimethylethanaminium iodide', otherNames: ['ethyldi(methyl)azanium iodide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601d.gif', pin: 'N,N,N-trimethylmethanaminium iodide', otherNames: ['tetramethylazanium iodide', 'tetramethylammonium iodide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601e.gif', pin: 'N-methylanilinium bromide', otherNames: ['N-methylbenzenaminium bromide', 'methyl(phenyl)azanium bromide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601f.gif', pin: '3-methyl-1,3-thiazol-3-ium chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601g.gif', pin: 'N-methylethaniminium chloride', otherNames: ['ethylidene(methyl)azanium chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620601h.gif', pin: 'N-phenylethaniminium bromide', otherNames: ['ethylidene(phenyl)azanium bromide'] },
]);
