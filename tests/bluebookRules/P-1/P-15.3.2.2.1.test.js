/**
 * P-15.3.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In multiplicative nomenclature, the use of primes on the italic letter N is used to differentiate
 * among nitrogen atoms of identical structural units that contain one characteristic group with one or
 * more nitrogen atoms.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 80, P-15.3.2.2.1, example 1. [corrected 1 May 2019]
 *     For N,N′-methylenedi(ethan-1-amine) (PIN)
 *     read N,N′-methylenediethanamine (PIN)
 *   Page 80, P-15.3.2.2.1, example 1. [corrected 3 December 2025]
 *     For N,N′--methylenedi(ethan-1-amine) (PIN)
 *     read N,N′--methylenediethanamine
 *     Add N,N′-diethylmethanediamine (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503au.gif', pin: 'N,N′-methylenediethanamine N,N′-diethylmethanediamine' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503av.gif', pin: 'N′,N′′′-methylenediacetohydrazide' },
]);
