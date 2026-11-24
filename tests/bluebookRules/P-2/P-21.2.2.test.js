/**
 * P-21.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Homogeneous acyclic parent hydrides other than hydrocarbons and boron hydrides
 * A compound consisting of an unbranched chain containing two or more identical heteroatoms saturated
 * with hydrogen atoms is named by citing the appropriate multiplying prefix from Table 1.4 (with no
 * elision of the terminal vowel of the multiplying prefix) followed by the name of the appropriate
 * hydride according to P-21.1. These names are preselected (see P-12.2). Potential functionality of
 * terminal groups, such as –SH or –OH, is ignored.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210202a.gif', name: 'hydrazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210202b.gif', preselectedName: 'nonaazane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210202c.gif', preselectedName: 'pentasilane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210202d.gif', preselectedName: 'pentaphosphane' },
  { formula: 'HS-S-S-SH', preselectedName: 'tetrasulfane', notNames: ['disulfanedithiol', 'trisulfanethiol', 'see P-58.3.1'] },
]);
