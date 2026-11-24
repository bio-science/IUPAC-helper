/**
 * P-58.2.3.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When there are more indicated hydrogen atoms than can be used to accommodate all of the principal
 * characteristic groups or free valences in the structure of the compound, the remaining indicated
 * hydrogen atoms are assigned to the lowest nonfusion peripheral atom consistent with the arrangement
 * of double bonds in the compound. Locants for ‘hydro’ prefixes are those of the saturated positions.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 622, P-58.2.3.1.2, example 1. [modified 27 February 2019]
 *     For dihydro-1H,3H,4H-3a, 6a-methanocyclopenta[c]furan-1,3-dione (PIN)
 *     read 5,6-dihydro-1H,3H,4H-3a,6a-methanocyclopenta[c]furan-1,3-dione (PIN) [delete space in name]
 *     for (not 1H,3H,6H-3a,6a-methanocyclopenta[c]furan-1,3-dione; ...
 *     read (not 4,5-dihydro-1H,3H,6H-3a,6a-methanocyclopenta[c]furan-1,3-dione; ...
 *   Page 622, P-58.2.3.1.2, example 2. [corrected 29 January 2020]
 *     For (not 2H,8H-benzo[1,2-b:5,4-b′]dipyran-4(3H)-one;
 *     read (not 6,7-dihydro-2H,8H-benzo[1,2-b:5,4-b′]dipyran-4(3H)-one;
 *     for 2H,6H’ is lower than ‘2H,8H’)
 *     read ‘2H,6H’ is lower than ‘2H,8H’)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.3.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203j.gif', pin: '5,6-dihydro-1H,3H,4H-3a,6a-methanocyclopenta[c]furan-1,3-dione', notNames: ['4,5-dihydro-1H,3H,6H-3a,6a-methanocyclopenta[c]furan-1,3-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203k.gif', pin: '7,8-dihydro-2H,6H-benzo[1,2-b:5,4-b′]dipyran-6-one', notNames: ['2,3-dihydro-4H,8H-benzo[1,2-b:5,4-b′]dipyran-4-one', '6,7-dihydro-2H,8H-benzo[1,2-b:5,4-b′]dipyran-4(3H)-one'] },
]);
