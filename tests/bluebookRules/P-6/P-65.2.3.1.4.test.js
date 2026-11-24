/**
 * P-65.2.3.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Replacement by NH2 and NHNH2 groups
 * The prefixes amido and hydrazido are used to indicate functional replacement by –NH2 and –NHNH2
 * groups, respectively. Italic letter locants N, N′, etc. are used to designate substitution on
 * nitrogen atoms that are not amide linkages for which numerical locants are used.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.3.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203s.gif', pin: '1-amido-2-thiodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203t.gif', pin: '1-hydrazido-2,4-diimidotricarbonic acid' },
]);
