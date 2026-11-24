/**
 * P-44.2.2.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior cyclic phane system occurs earlier in the following list of basic phane skeletal ring
 * systems: spiro > nonfused bridged (von Baeyer) > monocyclic.
 * Examples (in order of decreasing seniority according to the criteria (a) in P-44.2.2.2.2):”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202s.gif', pin: '4,12(1,3)-dibenzenaspiro[7.7]pentadecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202t.gif', pin: '5,12(1,3)-dibenzenabicyclo[7.5.1]pentadecaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202t.gif', pin: '1(1,3)-benzena-5(1,3)-cyclohexana-3(1,3)-cyclopentanacycloundecaphane' },
]);
