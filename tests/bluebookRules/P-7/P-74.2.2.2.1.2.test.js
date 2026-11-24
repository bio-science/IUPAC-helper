/**
 * P-74.2.2.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitrile oxides and chalcogen analogues.
 * Method (2) in P-74.2.2.2.1, functional class names, yields preferred IUPAC names (see also
 * P-66.5.4.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74222b.gif', pin: 'acetonitrile oxide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74222c.gif', pin: 'acetonitrile sulfide' },
]);
