/**
 * P-27.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fullerenes in which carbon atoms have been replaced by one or more heteroatoms are called
 * ‘heterofullerenes’. Skeletal replacement (‘a’) nomenclature is used to name fullerenes in which
 * carbon atoms have been replaced by heteroatoms having standard bonding numbers according to the ‘a’
 * prefixes of organic replacement nomenclature (see P-15.4) or bonding numbers indicated by the
 * λ-convention (see P-14.1). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-27.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270501a.gif', pin: 'sila(C60-Ih)[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P270501b.gif', pin: '2H-1-aza(C60-Ih)[5,6]fullerene' },
]);
