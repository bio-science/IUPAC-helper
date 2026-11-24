/**
 * P-22.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsubstituted monocyclic hydrocarbon polyenes having the maximum number of non-cumulative double
 * bonds (mancude) and with the general formula of CnHn or CnHn+1 (with n greater than 6) are called
 * annulenes generically. A specific annulene is named as an [n]annulene, where n is the number of
 * carbon atoms of the ring and is greater than 6. When n is an odd number, i. …
 * Preferred IUPAC names for fully unsaturated monocyclic hydrocarbons are those of the corresponding
 * cycloalkapolyenes (see P-31.1.3.1).
 * Benzene is the retained name for C6H6; the name [6]annulene is not recommended.
 * In the numbering of annulenes, the locant ‘1’ is placed at any carbon atom in structures having an
 * even number of carbon atoms; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220102a.gif', pin: 'benzene', notNames: ['[6]annulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220102b.gif', pin: 'cyclodeca-1,3,5,7,9-pentaene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220102c.gif', pin: 'cyclododeca-1,3,5,7,9,11-hexaene' },
]);
