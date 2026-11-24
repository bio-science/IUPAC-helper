/**
 * P-23.2.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Tricyclic hydrocarbons having an independent secondary bridge are named on the basis of a bicyclic
 * system described in P-23.2.2. Rings not described by the bicyclic system are defined by citing the
 * number of atoms in the independent secondary bridge as an arabic number. The locants of the two
 * attachment points of the independent secondary bridge to the main ring are cited as a pair of
 * superscript arabic numbers (lower number is cited first) separated by a comma.
 * The name of the tricyclic system is then constructed by citing:
 * (a) the prefix ‘tricyclo’, in place of ‘bicyclo’, indicating the presence of three rings in the
 * polyalicyclic system;
 * (b) numbers indicating the bridge lengths, starting with the two branches of the main ring (shown as
 * a bold line in the structures below), followed by the main bridge (shown in dotted bold lines in …
 * (c) the name of the acyclic hydrocarbon having the same total number of skeletal atoms.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230205a.gif', pin: 'tricyclo[2.2.1.0²,⁶]heptane' },
]);
