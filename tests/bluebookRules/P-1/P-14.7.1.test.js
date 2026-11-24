/**
 * P-14.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen. Under certain circumstances it is necessary to indicate in the name of a
 * mancude ring or ring system, i.e., one that contains the maximum number of noncumulative double
 * bonds, one or more positions where no multiple bond is attached. When these positions are occupied
 * by hydrogen atoms, the name can be made specific by indicating the position of one or more hydrogen
 * atoms in the structure; …
 * In the first example, the ‘indicated hydrogen’ locates one hydrogen atom in position ‘1’ of the
 * pyrrole ring; …
 * Detailed procedures for using ‘indicated hydrogen’ are discussed in P-58.2.1.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.7.1', [
  { pin: '1H-pyrrole', otherNames: ['pyrrole'] },
  { pin: '3H-pyrrole' },
]);
