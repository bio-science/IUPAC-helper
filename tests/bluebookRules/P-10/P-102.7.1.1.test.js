/**
 * P-102.7.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Disaccharides without a free hemiacetal group
 * Disaccharides which can be regarded as formed by elimination of one molecule of water from two
 * glycosidic (anomeric) hydroxy groups, are named as glycosyl glycosides. The parent (cited as the
 * ‘glycoside’) is chosen in accordance with criteria described in P-102.4. Both anomeric descriptors
 * must be cited in the name.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.7.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102711a.gif', name: 'β-D-fructofuranosyl α-D-glucopyranoside', notNames: ['α-D-glucopyranosyl β-D-fructofuranoside fructo precedes gluco in the alphabetical order'] },
]);
