/**
 * P-101.3.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The insertion of a methylene group into a mancude ring or ring system (that contains the maximum
 * number of noncumulative double bonds) or into a system of conjugated double bonds may create a
 * saturated ring position that is described by ‘indicated hydrogen’ (see P-14.7 and P-58.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322h.gif', name: 'morphinan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322i.gif', name: '1H-4a-homomorphinan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101322j.gif', name: 'porphyrin' },
]);
