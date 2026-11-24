/**
 * P-23.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Naming bicyclic alicyclic hydrocarbons
 * Saturated homogeneous bicyclic hydrocarbons having two or more atoms in common are named by
 * prefixing ‘bicyclo’ to the name of the acyclic hydrocarbon having the same total number of skeletal
 * atoms. The numbers of skeletal atoms in each of the two segments connecting the main bridgeheads and
 * in the main bridge are given by arabic numbers cited in descending numerical order, separated by
 * full stops, and enclosed in square brackets.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230202a.gif', pin: 'bicyclo[3.2.1]octane' },
]);
