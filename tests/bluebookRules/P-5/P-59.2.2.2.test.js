/**
 * P-59.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterocyclic compounds having retained or systematic names are considered as parent hydrides. Thus,
 * suffixes are added and assigned lowest possible locants in accordance with the fixed numbering of
 * the heterocyclic ring or ring system. Added indicated hydrogen atoms, if needed, are assigned next
 * lowest possible locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P590202d.gif', pin: 'quinoline-6-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P590202e.gif', pin: 'quinolin-6(2H)-one' },
  { pin: '1,3a¹,4,9-tetraazaphenalene-3-carboxylic acid' },
]);
