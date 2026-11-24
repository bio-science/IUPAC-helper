/**
 * P-31.2.3.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polycyclic mancude compounds
 * The degree of hydrogenation of partially or fully saturated individual mancude ring systems,
 * carbocyclic or heterocyclic, is given by ‘hydro’ prefixes, in accordance with the general
 * methodology described in P-31.2.2. Total hydrogenation is indicated by the appropriate
 * multiplicative prefixes indicating the total number of hydrogen atoms attached, but locants are
 * omitted (see P-14.3.4.5).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203y.gif', pin: '1,4-dihydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203z.gif', pin: '6,7-dihydro-5H-benzo[7]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203aa.gif', pin: 'decahydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ab.gif', pin: 'tetradecahydroanthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ac.gif', pin: 'octadecahydro-7,14-methano-4,6:8,10-dipropanodicyclohepta[a,d][8]annulene', otherNames: ['hexacyclo[15.3.2.2³,⁷.1²,¹².0¹³,²¹.0¹¹,²⁵]pentacosane'] },
]);
