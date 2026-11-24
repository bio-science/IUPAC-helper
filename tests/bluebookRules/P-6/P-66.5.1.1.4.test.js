/**
 * P-66.5.1.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a group is present that has priority for citation as the principal characteristic group or
 * when all –CN groups cannot be expressed as the principal characteristic group, the –CN group is
 * designated by the preferred prefix ‘cyano’. The prefix ‘cyano’ must also be used when the –CN group
 * is located at the end of a chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511g.gif', pin: '5-cyanofuran-2-carboxylic acid', otherNames: ['5-cyano-2-furoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511h.gif', pin: '3-cyanopropanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511i.gif', pin: '4-(cyanomethyl)heptanedinitrile' },
]);
