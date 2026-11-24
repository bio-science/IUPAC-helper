/**
 * P-66.4.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred prefix for the group –C(=N-NH2)-NH2 is ‘carbamohydrazonoyl’. When this group is
 * located at the end of a carbon chain, the prefixes ‘amino’ and ‘hydrazinylidene’ are used in
 * preferred IUPAC names in order to avoid fragmenting the parent chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423c.gif', pin: '3-amino-3-hydrazinylidenepropanoic acid', otherNames: ['carbamohydrazonoylacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423d.gif', pin: '3-carbamohydrazonoylbenzoic acid', otherNames: ['3-[amino(hydrazinylidene)methyl]benzoic acid'] },
]);
