/**
 * P-102.5.6.6.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Glycosides of ketoaldonic acids are named by changing the component ‘pyranose’ into ‘pyranoside’ in
 * the name, to give ‘-ulopyranosidonic acid’. Names of derivatives of ketoaldonic acids are formed as
 * described in P-102.5.6.6.2 for aldonic acids. When a glycoside is esterified, parentheses are used
 * to isolate the glycosidic portion of the name.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566m.gif', name: 'ethyl (methyl α-D-fructopyranosid)onate' },
]);
