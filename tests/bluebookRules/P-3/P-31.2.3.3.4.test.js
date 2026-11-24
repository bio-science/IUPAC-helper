/**
 * P-31.2.3.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Phane compounds
 * When the name of an amplificant implies the presence of a maximum number of noncumulated double
 * bonds, other states of hydrogenation are indicated by use of the prefix ‘hydro’. This method is
 * applied as follows (see ref. 6, PhII-5.1 and PhII-5.2):
 * (1) ‘Hydro’ prefixes are used to modify mancude heteromonocycles having retained names or named in
 * accordance with the extended Hantzsch-Widman system. …
 * (2) ‘Hydro’ prefixes are used to indicate all modifications of the degree of unsaturation of
 * carbocyclic or heterocyclic mancude parent hydrides, except for benzene. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203af.gif', pin: '1¹,1²,1³,1⁴,1⁴ᵃ,1⁵,1⁶,1⁷,1⁸,1⁸ᵃ-decahydro-1(2,7)-naphthalena-5(1,4)-benzenacyclooctaphane' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ag.gif', pin: '1¹,1⁴-dihydro-1,7(2,6)-dipyridinacyclododecaphane' },
]);
