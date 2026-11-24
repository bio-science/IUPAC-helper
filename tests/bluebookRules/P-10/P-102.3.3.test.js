/**
 * P-102.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The configurational atom
 * A monosaccharide is assigned to the ‘D’ or ‘L’ series according to the configuration of the highest
 * numbered chirality center. This asymmetrically substituted carbon atom is called the
 * ‘configurational atom’. Thus if the hydroxy group projects to the right in the Fischer projection,
 * the sugar belongs to the ‘D’ series, and receives the ‘D’ stereodescriptor.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102330a.gif', name: 'D-mannose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102330b.gif', name: 'L-glucose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102330c.gif', name: 'L-ribose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102330d.gif', name: 'D-sorbose' },
]);
