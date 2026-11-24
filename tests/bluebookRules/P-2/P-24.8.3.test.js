/**
 * P-24.8.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Spiro ring systems with three identical components and one nonstandard spiro atom.
 * Ring systems composed of three identical polycyclic ring components and only one spiro atom are
 * named by placing the prefix ‘spiroter’ before the name of the polycyclic component enclosed in
 * square …
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2).”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240803a.gif', pin: '2λ⁶,2′,2′′-spiroter[[1,3,2]benzodioxathiole]' },
]);
