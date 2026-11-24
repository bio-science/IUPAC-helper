/**
 * P-93.5.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The descriptors ‘cisoid’ and ‘transoid’
 * Steric relations at more than one pair of saturated fusion atoms in a fused system are denoted by
 * ‘cis’ and ‘trans’, each followed by a hyphen, and, if necessary, the corresponding locant of the
 * lower-numbered fusion atom and a second hyphen, all placed before the name of the ring system. …
 * The descriptors ‘cisoid’ and ‘transoid’ are not abbreviated. These descriptors are no longer
 * recommended. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1269, P-93.5.4.2, example 1.. [corrected 12 May 2021]
 *     For [cis-cisoid-cis-tetrahydroanthracene]
 *     read cis-cisoid-cis-tetrahydroanthracene
 *   Page 1269, P-93.5.4.2, example 2, right version. [corrected 2 January 2019]
 *     Replace the right-hand structure with:
 *   Page 1269, P-93.5.4.2, example 2.. [corrected 12 May 2021]
 *     For [cis-4a-cisoid-4a,10a-trans-10a-tetradecahydroacridine]
 *     read cis-4a-cisoid-4a,10a-trans-10a-tetradecahydroacridine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93542a.gif', name: 'cis-cisoid-cis-tetradecahydroanthracene' },
  { pin: 'rel-(4aR,8aR,9aR,10aS)-tetradecahydroacridine', otherNames: ['cis-4a-cisoid-4a,10a-trans-10a-tetradecahydroacridine'] },
]);
