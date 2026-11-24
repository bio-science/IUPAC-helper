/**
 * P-101.5.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The attached component fused to a parent structure is a mancude compound (it contains the maximum
 * number of noncumulative double bonds). Saturated positions on such components, including the fusion
 * sites, that have at least one hydrogen atom are specified by an indicated hydrogen. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.5.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101512a.gif', notNames: ['8αH-oxazolo[5′,4′:8,14]morphinan'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101512b.gif', name: '5′H-cyclopenta[2,3]-5α-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101512c.gif', name: 'bis[1,2]oxazolo[4′,3′:6,7;5′′,4′′:16,17]-5α-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101512d.gif', name: '1′H-pyrrolo[3′,4′:18,19][1,2]thiazolo[4′′,5′′:16,17]yohimban' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101512e.gif', name: '2′H-[1,3]oxazepino[4′,5′,6′:12,13,17]-5α-androstane' },
]);
