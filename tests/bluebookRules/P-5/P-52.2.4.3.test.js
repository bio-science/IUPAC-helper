/**
 * P-52.2.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiparent fused ring systems with three or more interparent components
 * When two (or more) possible parent components are separated by an odd number of interparent
 * components and these are ordered symmetrically with respect to their component rings (but not
 * necessarily with their fusion locants), the whole system is treated as a multiparent system. In
 * P-25.3.7.3, second- and higher-order interparent components are named using the multiplying prefixes
 * ‘di’, ‘tri’, etc., or ‘bis’, ‘tris’, etc. …
 * When symmetry permits grouping of interparent components and parent components, such groupings can
 * be formed and cited as such using the prefixes ‘bis’, ‘tris’, etc. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204e.gif', pin: 'benzo[1′′,2′′:3,4;4′′,5′′:3′,4′]dicyclobuta[1,2-b:1′,2′-c′]difuran' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204f.gif', pin: 'benzo[1′′,2′′:3,4;4′′,5′′,3′,4′]dicyclobuta[1,2-c:1′,2′-c′]difuran', otherNames: ['benzo[1′′,2′′:3,4;4′′,5′′:3′,4′]bis(cyclobuta[1,2-c]furan)'] },
]);
