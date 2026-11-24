/**
 * P-26.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering of an amplificant is determined primarily by the numbering rules that apply to the parent
 * name from which the amplification prefix is derived. When there is a choice, the general rule of
 * lowest locants is used, as described in the preceding rule.
 * These two rules, P-26.4.1.1 and P-26.4.1.2, are illustrated by the following examples.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401a.gif', pin: '1(4)-pyrimidina-3,6(5,2),9(3)-tripyridinanonaphane', notNames: ['9(4)-pyrimidina-1(3),4,7(2,5)-tripyridinanonaphane', '1(4)-pyrimidina-3,6(2,5),9(3)-tripyridinanonaphane', '1(4)-pyrimidina-3(5,2),6(5,2),9(3)-tripyridinanonaphane', '1(4)-pyrimidina-3,6(3,6),9(3)-tripyridinanonaphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260401b.gif', pin: '3(5,2)-pyridina-1(3,1)-piperidina-6(3,1)-naphthalenacyclononaphane', notNames: ['1(5,2)-pyridina-3(3,1)-piperidina-7(3,1)-naphthalenacyclononaphane', '7(5,2)-pyridina-5(1,3)-piperidina-1(3,1)-naphthalenacyclononaphane', '3(2,5)-pyridina-1(1,3)-piperidina-6(1,3)-naphthalenacyclononaphane'] },
]);
