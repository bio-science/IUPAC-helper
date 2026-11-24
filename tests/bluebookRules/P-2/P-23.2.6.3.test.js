/**
 * P-23.2.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering of secondary bridges
 * After numbering the main ring and main bridge, independent secondary bridges are numbered before
 * dependent secondary bridges; the numbering continues from the highest number of the main ring and
 * main bridge. Each secondary bridge is numbered in turn starting with the independent secondary
 * bridge linked to the highest numbered bridgehead atom of the main ring, then the independent
 * secondary bridge linked to the next highest bridgehead atom, and so on. …
 * Note: Rule A-32.23 in the 1979 Recommendations (ref. 1) and Rule R-2.4.2.2 in the l993
 * Recommendations (ref. 2) have been replaced by this Rule.
 * Explanation: The first secondary bridge to be numbered is linked to bridgehead 10.
 * Explanation: In the correct name (I), the PIN, the independent bridge is numbered before the
 * dependent bridge; locant sequence ‘3,8,18,20,13,28’
 * is lower than ‘3,13,18,20,8,28’ (see P-14.3.5).”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.2.6.3', [
  { pin: 'tetracyclo[4.4.2.2²,⁵.2⁷,¹⁰]hexadecane' },
  { pin: 'tetracyclo[5.4.2.2²,⁶.1⁸,¹¹hexadecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230206t.gif', name: 'hexacyclo[15.3.2.2³,⁷.1²,¹².0¹³,²¹.0¹¹,²⁵]pentacosane' },
  { pin: 'octadecahydro-6,13-methano-2,14:7,9-dipropanodicyclohepta[a,e][8]annulene', notNames: ['octadecahydro-7,14-methano-4,6:8,10-dipropanodicyclohepta[a,d][8]annulene'] },
]);
