/**
 * P-25.3.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Additional attached components
 * Additional attached components may be fused to any of the components of a multiparent system. If the
 * choice of locants described in P-25.3.4.2.4 does not permit a final choice, seniority is given to
 * the unprimed component and the fusion letters are assigned with the lower letter used for fusion to
 * the connecting component. Great care is needed with the use of primes, double primes, etc. to ensure
 * that there is no ambiguity. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307j.gif', pin: 'tribenzo[c,d′,e]benzo[1,2-a:4,5-a′]di[7]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250307k.gif', pin: 'thieno[2′,3′:3,4]cyclopenta[1,2-e]furo[3′,4′:6,7]cyclohepta[1,2-b:5,4-b′]dipyridine' },
]);
