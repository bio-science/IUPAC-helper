/**
 * P-103.1.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Use of the prefix ‘allo’
 * The prefix ‘allo’ is used to modify the retained names ‘isoleucine’ and ‘threonine’ when the
 * configuration at ‘C-3’ has been inverted. The symbols are modified to ‘aIle’ and ‘aThr’,
 * respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.1.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103132e.gif', name: 'L-isoleucine (symbols ‘Ile’, ‘ I’)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103132f.gif', name: 'L-alloisoleucine (symbol ‘aIle’)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103132g.gif', name: 'L-threonine (symbols ‘Thr’,‘T’)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103132h.gif', name: 'L-allothreonine (symbol ‘aThr’)' },
]);
