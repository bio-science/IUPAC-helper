/**
 * P-102.5.6.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution at a nonterminal carbon atom
 * The compound is named as a C-substituted monosaccharide. The group having priority in accordance
 * with the CIP priority system is regarded as equivalent to –OH for assignment of configuration. Any
 * ambiguity (e.g. at a carbon atom where ring formation occurs) is avoided by using the R,S system to
 * specify the configuration at the modified chirality center.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563a.gif', name: '2-C-phenyl-β-D-glucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563b.gif', name: '5-C-bromo-β-D-glucopyranose pentaacetate' },
]);
