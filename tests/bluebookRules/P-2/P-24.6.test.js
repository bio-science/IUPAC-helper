/**
 * P-24.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “UNBRANCHED POLYSPIRO RING SYSTEMS WITH DIFFERENT RING COMPONENTS ONE BEING A POLYCYCLIC RING SYSTEM
 * Unbranched polyspiro ring systems with at least two different ring components and at least one of
 * which is a polycyclic ring are named by placing the ring component names in order of their
 * occurrence in the structure beginning with the terminal ring component lower in alphabetical order
 * and enclosing within square brackets. A nondetachable prefix indicating the number of spiro atoms
 * (‘dispiro’, ‘trispiro’, etc.) is placed in front of the enclosed ring component names. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 188, P-24.6, line 7/8. [corrected 8 May 2019]
 *     For ... and so on; accordingly, locants required by the names of the second and later ring
 *     components are enclosed in square brackets.
 *     read ... and so on. In a complete name, all locants present in a bicyclic fused benzo ring
 *     component or Hantzsch-Widman named component are placed in brackets (without primes for the
 *     second and subsequent components, see fourth example below).
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.6', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240600a.gif', pin: 'dispiro[fluorene-9,1′-cyclohexane-4′,1′′-indene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240600b.gif', pin: '2′′H,4′′H-trispiro[cyclohexane-1,1′-cyclopentane-3′,3′′-cyclopenta[b]pyran-6′′,1′′′-cyclohexane]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240600c.gif', pin: '7′-azadispiro[fluorene-9,2′-bicyclo[2.2.1]heptane-5′,1′′-indene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240600d.gif', pin: '3,6-dioxadispiro[bicyclo[2.2.1]heptane-2,2′-[1,4]dioxane-5′,2′′-pyran]' },
]);
