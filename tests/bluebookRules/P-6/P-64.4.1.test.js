/**
 * P-64.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic heterones are compounds having an oxygen atom doubly bonded to a heteroatom. They may be
 * named in two ways.
 * (1) by the suffix ‘one’;
 * (2) by functional class names using the class name ‘oxide’ when the oxygen atom is bonded to a S,
 * Se, Te, P, As, Sb, or Bi atom.
 * Method (1) leads to preferred IUPAC names.
 * The distinction between ketones, ‘C-CO-C’, and aldehydes, ‘C-CHO’, is not retained for naming
 * compounds having the oxygen atom linked to a heteroatom. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.4.1', [
  { formula: 'HP=O', preselectedName: 'phosphanone', otherNames: ['phosphane oxide', 'phosphine oxide'] },
  { formula: '(CH3)2Si=O', pin: 'dimethylsilanone' },
  { formula: '(C6H5)3PO', pin: 'triphenyl-λ⁵-phosphanone', otherNames: ['triphenylphosphane oxide', 'triphenylphosphine oxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640401a.gif', pin: '1-methyl-2-phenyl-1λ⁶,2λ⁶-disulfane-1,1,2,2-tetrone', otherNames: ['methyl phenyl disulfone'] },
]);
