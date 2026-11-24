/**
 * P-25.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteranthrene components
 * A heterotricyclic parent component consisting of two benzene rings fused to a 1,4-dihetera-benzene
 * in which the heteroatoms are the same is named by attaching the appropriate ‘a’ prefix to the ending
 * ‘anthrene’ (derived from anthracene), with elision of a letter ‘a’. The allowed heteroatoms are O,
 * S, Se, Te, P, As, Si, and B. When the heteroatoms are nitrogen atoms, the component is named
 * ‘phenazine’ (a retained name). The numbering is standard, as shown. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 216, P-25.2.2.2, example 1 in the left column. [corrected 30 January 2019]
 *     Delete dibenzo[1,4]dioxine)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202c.gif', pin: 'X = O oxanthrene' },
  { pin: 'X = S thianthrene' },
  { pin: 'X = Se selenanthrene' },
  { pin: 'X = Te telluranthrene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202d.gif', pin: 'X = N phenazine' },
  { pin: 'X = P phosphanthrene' },
  { pin: 'X = As arsanthrene' },
  { pin: 'X = B boranthrene' },
  { pin: 'X = SiH silanthrene' },
]);
