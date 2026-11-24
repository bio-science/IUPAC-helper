/**
 * P-65.7.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic dianhydrides formed from four acid groups attached to the same parent hydride structure are
 * named in two ways:
 * (1) as heterocyclic pseudoketones;
 * (2) by changing the class term ‘acid’ to ‘dianhydride’ in the systematic or retained name of the
 * tetrabasic acid; the locants of the pair of
 * acid groups are separated by a semicolon.
 * Method (1) generates preferred IUPAC names”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707j.gif', pin: 'tetrahydrocyclobuta[1,2-c:3,4-c′]difuran-1,3,4,6-tetrone', otherNames: ['cyclobutane-1,2,3,4-tetracarboxylic 1,2:3,4-dianhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650707k.gif', pin: 'hexahydrobenzo[1,2-c:3,4-c′]difuran-1,3,6,8-tetrone', otherNames: ['cyclohexane-1,2,3,4-tetracarboxylic 1,2:3,4-dianhydride'] },
  { pin: 'tetrahydro-4,8-ethanopyrano[4,3-c]pyran-1,3,5,7-tetrone', otherNames: ['{not 4,9-dioxatricyclo[4.4.2.0²,⁷]dodecane-3,5,8,10-tetrone [numbering shown in (II)]}', 'cyclohexane-1,2,3,4-tetracarboxylic 1,3:2,4-dianhydride'] },
]);
