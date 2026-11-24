/**
 * P-101.7.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution on rings
 * Suffixes are used in accordance with the seniority order of suffixes, considering the cyclic nature
 * of the parent hydride. Detachable prefixes are cited in alphanumerical order. The endings ‘ene’ and
 * ‘yne’ are cited in the normal way; the ‘hydro-dehydro’ prefixes are detachable but cited last among
 * detachable prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1335, P-101.7.1.2, example 2. [corrected 17 October 2018]
 *     Replace the structure with:
 *   Page 1336, P-101.7.1.2, example 4 on this page. [corrected 23 September 2020]
 *     For 7β-amino-3-methyl-2,3-didehydrocepham-2-carboxylic acid
 *     read 7β-amino-3-methyl-3,4-didehydrocepham-4-carboxylic acid
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.7.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101712a.gif', name: '3β-bromo-5α-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101712b.gif', name: '5β-androstan-3β-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101712c.gif', name: '3β-methyl-5α-androstan-3α-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101712d.gif', name: '17α-hydroxyandrost-4-en-3-one' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101712f.gif', name: '3-oxoandrost-4-ene-17α-carboxylic acid', notNames: ['21-nor-5α-pregnan-20-oic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101712g.gif', name: '7β-amino-3-methyl-3,4-didehydrocepham-4-carboxylic acid' },
]);
