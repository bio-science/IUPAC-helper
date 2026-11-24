/**
 * P-71.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ASSEMBLIES OF PARENT RADICALS
 * Polyradicals with radical centers identically derived from the same parent hydride or the same
 * characteristic group (except for polyacyl or polyamide radicals described in P-71.3.1 and P-71.3.3,
 * respectively) but located in different parts of the structure are named, if possible, according to
 * the principles for nomenclature of assemblies of identical units linked by multivalent substituents
 * (see P-15.3).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.4', [
  { formula: '•O-C(CH3)2-CH2-C(CH3)2-O•', pin: '(2,4-dimethylpentane-2,4-diyl)bis(oxyl)', otherNames: ['(2,4-dimethylpentane-2,4-diyl)bis(oxidanyl)'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71400c.gif', pin: '(cyclobutane-1,3-diyl)bis(peroxyl)', otherNames: ['(cyclobutane-1,3-diyl)bis(dioxidanyl)'] },
]);
