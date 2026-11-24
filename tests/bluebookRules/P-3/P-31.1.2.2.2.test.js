/**
 * P-31.1.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic parent hydrides modified by skeletal replacement (‘a’) nomenclature
 * Locants are assigned to unsaturation sites in chains in accordance with the fixed numbering of the
 * hetero chain. If a choice remains, then lowest locants are assigned to unsaturated sites.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102k.gif', pin: '2,5,8,11-tetraoxatetradec-13-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102l.gif', pin: '2,5,8,11-tetraoxadodec-3-ene' },
]);
