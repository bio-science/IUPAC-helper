/**
 * P-73.5.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polycations derived from cyclic diimides and polyimides are named on the basis of the heterocyclic
 * structure of the imides.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.5.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73513a.gif', pin: '2,2′,5,5′-tetraoxo[3,3′-bipyrrolidine]-1,1′-diium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73513b.gif', pin: '1,3,5,7-tetraoxo-5,7-dihydrobenzo[1,2-c:4,5-c′]dipyrrole-2,6(1H,3H)-bis(ylium)' },
]);
