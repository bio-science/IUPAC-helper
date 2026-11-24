/**
 * P-31.1.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic cumulenes
 * Cyclic cumulenes are composed entirely of atoms, identical or different, linked by double bonds. For
 * homocyclic cumulenes omission of all locants is recommended for preferred IUPAC names (see
 * P-14.3.4.5).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103l.gif', pin: 'cycloundecaundecaene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103m.gif', pin: '1λ⁴,2λ⁴-dithiacycloundecaundecaene' },
]);
