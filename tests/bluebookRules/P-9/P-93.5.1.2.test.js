/**
 * P-93.5.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Relative configuration: the stereodescriptors ‘cis’ and ‘trans’
 * The stereodescriptors ‘cis’ and ‘trans’ are used to show the relationship between two ligands (atoms
 * or groups) attached to separate atoms that are contained in a ring or a ring system. The two ligands
 * are said to be located ‘cis’ to each other if they lie on the same side of a plane. If they are on
 * opposite sides, their relative position is described as ‘trans’. …
 * The structures below look like ‘cis/trans-isomers’, but are actually different conformations of the
 * same ‘cis’ stereoisomer. …
 * When one ligand and one hydrogen atom are attached at each of two positions of a monocycle, the
 * steric relation (the relative configuration) of the two ligands is expressed as ‘cis’ or ‘trans’, …
 * Explanation: In structure I, the locant ‘1’ is assigned to the non-CIP stereodescriptor ‘cis’; and
 * in structure II to the CIP stereodescriptor ‘r’. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93512a.gif', name: 'cis trans' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93512d.gif', pin: 'rel-(1R,2R)-2-chlorocyclopentane-1-carboxylic acid', otherNames: ['cis-2-chlorocyclopentane-1-carboxylic acid'], notNames: ['rel-(1S,2S)-2-chlorocyclopentane-1-carboxylic acid', '(1S*,2S*)-2-chlorocyclopentane-1-carboxylic acid'] },
]);
