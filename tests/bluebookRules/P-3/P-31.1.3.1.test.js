/**
 * P-31.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In monocyclic homogeneous unsaturated compounds, one double or triple bond is always allocated the
 * locant ‘1’. When alone, the locant ‘1’ is omitted in names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 377, P-31.1.3.1, example 2 on this page. [corrected 4 September 2024]
 *     For cyclododeca-1,5-diene (PIN)
 *     read (1Z,5E)-cyclododeca-1,5-diene (PIN)
 *   Page 377, P-31.1.3.1, example 3 on this page. [corrected 4 September 2024]
 *     Replace the structure with:
 *     for cyclopentadec-1-en-4-yne (PIN)
 *     read (1Z)-cyclopentadec-1-en-4-yne (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103a.gif', pin: 'cyclohexene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103b.gif', pin: 'cyclohexa-1,4-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103c.gif', pin: 'cycloocta-1,3,5,7-tetraene' },
]);
