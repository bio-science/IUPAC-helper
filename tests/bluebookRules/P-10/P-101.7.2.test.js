/**
 * P-101.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Modifications to principal characteristic groups such as esters (see P-65.6.3.2), acetals (see
 * P-66.6.5), etc. are named by the usual methods described in Chapter P-6. Cyclic modifications, such
 * as lactones, cyclic acetals, etc. are named preferably as such rather than as fused or spiro ring
 * systems, even if these names are functional class names (see also P-101.7.4).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101720a.gif', name: 'methyl 5β-androstane-17β-carboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101720b.gif', name: '3,3-bis(ethylsulfanyl)tropane' },
]);
