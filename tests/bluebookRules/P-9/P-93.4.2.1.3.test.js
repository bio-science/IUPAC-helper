/**
 * P-93.4.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Descriptors ‘E’ and ‘Z’ to denote double bonds linked to heteroatoms
 * The stereodescriptors ‘E’ and ‘Z’ are also used to indicate the configuration of double bonds
 * involving atoms other than carbon. A lone pair of electrons, when present, is considered to have the
 * atomic number ‘0’ (zero). The descriptors ‘syn’ and ‘anti’, and ‘cis’ and ‘trans’, are no longer
 * recommended for these situations. No locant is required before the stereodescriptor when none is
 * present in a name, but the stereodescriptor is placed in parentheses as indicated in P-91.3.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1238, P-93.4.2.1.3, example 1 on this page. [modified 2 September 2020]
 *     For (Z)-{N-[(4-chlorophenyl)(phenyl)methylidene]hydroxylamine} (PIN)
 *     read (Z)-N-[(4-chlorophenyl)(phenyl)methylidene]hydroxylamine
 *     for (Z)-[(4-chlorophenyl)phenylmethanone oxime]
 *     read (Z)-(4-chlorophenyl)(phenyl)methanone oxime
 *     add (Z)-N-hydroxy(4-chlorophenyl)(phenyl)methanimine (PIN)
 *   Page 1238, P-93.4.2.1.3, example 2 on this page. [corrected 24 July 2019]
 *     For (2E,3Z)-pentane-2,3-diylidenebis(hydroxylamine) (PIN)
 *     read (2E,3Z)-(pentane-2,3-diylidene)bis(hydroxylamine)
 *     add (2E,3Z)-N²,N³-dihydroxypentane-2,3-diimine (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.4.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93421n.gif', notNames: ['cis-diphenyldiazene'] },
]);
