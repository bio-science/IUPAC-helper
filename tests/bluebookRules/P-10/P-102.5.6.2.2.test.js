/**
 * P-102.5.6.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names
 * Glycosides are named by using functional class nomenclature. The name of the class ‘glycoside’ is
 * adapted to the name of each cyclic monosaccharide, by changing the letter ‘e’ at the end of the name
 * to ‘ide’, for example glucopyranose becomes glucopyranoside, fructofuranose becomes
 * fructofuranoside. The class name is preceded, as a separate word, by the name of the substituent
 * group that is part of the acetal or ketal function.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102562a.gif', name: 'methyl α-D-gulofuranoside' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102562b.gif', name: 'ethyl β-D-fructopyranoside' },
]);
