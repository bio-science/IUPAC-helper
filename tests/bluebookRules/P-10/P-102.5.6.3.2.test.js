/**
 * P-102.5.6.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution replacing a nonterminal hydroxy group
 * The compound is named as a substituted derivative of a deoxy sugar. The group replacing the –OH
 * group determines the configuration. Any potential ambiguity must be dealt with by the use of the R,S
 * system. The R,S system must be used to assign the preferred configuration of a chirality center
 * twice substituted; this method is preferable to that establishing the configuration by making the
 * substituent with high CIP priority equivalent to the –OH group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563c.gif', name: '2-deoxy-2-phenyl-α-D-glucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563d.gif', name: '2-bromo-2-deoxy-α-D-glucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563e.gif', name: '2-bromo-2-chloro-2-deoxy-α-D-glucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102563f.gif', name: '2-C-acetamido-2,3,4,6-tetra-O-acetyl-β-D-mannopyranosyl fluoride' },
]);
