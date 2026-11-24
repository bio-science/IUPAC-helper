/**
 * P-28.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “As exceptions to the use of parent hydride names, ring assemblies of three through six benzene
 * rings are named by method (2) as given in P-28.2.1, yielding names such as terphenyl, quaterphenyl,
 * etc.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280302a.gif', pin: '1¹,2¹:2⁴,3¹-terphenyl', otherNames: ['1,1′:4′,1′′-terphenyl'], notNames: ['p-terphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280302b.gif', pin: '1¹,2¹:2³,3¹:3³,4¹-quaterphenyl', otherNames: ['1,1′:3′,1′′:3′′,1′′′-quaterphenyl'], notNames: ['m-quaterphenyl'] },
]);
