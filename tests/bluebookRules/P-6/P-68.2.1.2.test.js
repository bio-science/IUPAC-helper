/**
 * P-68.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic parent hydrides
 * Names and preferred IUPAC names of cyclic parent hydrides are formed in accordance with the rules
 * described in Sections P-22 through P-28. Those with no carbon atoms are preselected.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68212a.gif', preselectedName: 'tetrastannetane', otherNames: ['cyclotetrastannane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68212b.gif', pin: '1,3,2-dithiagermolane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68212c.gif', preselectedName: '1,3,5,7,2,4,6,8-tetroxatetragermocane', otherNames: ['cyclotetragermoxane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68212d.gif', preselectedName: '2,4,6,8,9,10-hexathia-1,3,5,7-tetrasilaadamantane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68212e.gif', pin: '5-silaspiro[4.5]decane' },
]);
