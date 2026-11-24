/**
 * P-51.4.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature is used to derive preferred IUPAC names for heterocyclic
 * spiro parent hydrides consisting of two or more saturated monocyclic rings (see P-24.2.4.1.1)”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402d.gif', pin: '7-aza-1-thiaspiro[4.5]decane' },
]);
