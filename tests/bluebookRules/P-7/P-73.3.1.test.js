/**
 * P-73.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Application of the λ-convention with the suffix ‘ylium’
 * Cationic heterocycle having a cationic center on a heteroatom that has one more skeletal bonds than
 * it has in the corresponding neutral heterocycle is named by adding the suffix ‘ylium’ to the name of
 * the neutral parent hydride for which the λ-convention has been used to describe a nonstandard
 * bonding state of the heteroatom, and that heteroatom has at least one hydrogen atom in the neutral
 * heterocycle on which the ‘ylium’ suffix can operate. …
 * For certain cationic heterocycles of this type, especially those with cationic centers on
 * heteroatoms from the second period elements, it might seem more acceptable to use replacement
 * nomenclature …
 * The ‘dehydro’ method, however, can become quite cumbersome, requiring both ‘hydro’ and ‘dehydro’
 * prefixes in some cases.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1096, P-73.3.1, example 2 on this page. [corrected 12 June 2019]
 *     For 1λ³-benzoiodol-1-ylium
 *     read 1λ³-benziodol-1-ylium
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310a.gif', pin: '3H-1λ⁴-thiophen-1-ylium', notNames: ['3H-thienylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310b.gif', pin: '3H-1λ⁴,4-benzodithiocin-1-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310c.gif', pin: '1H-4λ⁵-indolizin-4-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310d.gif', pin: '5λ⁵-quinolizin-5-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310e.gif', pin: '4H-7λ⁵-pyrimido[1,2,3-cd]purin-7-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310f.gif', pin: '1λ³-benziodol-1-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310g.gif', pin: '5λ⁵,11λ⁵-dipyrido[1,2-a:1′,2′-d]pyrazine-5,11-bis(ylium)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310h.gif', pin: '5λ⁵-quinolizin-5-ylium', otherNames: ['4a-azonianaphthalene', '2,5-didehydro-2H-quinolizin-5-ium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73310i.gif', pin: '3H-1λ⁴-thiophen-1-ylium', otherNames: ['1,2-didehydro-2,3-dihydrothiophen-1-ium'], notNames: ['3H-thienylium'] },
]);
