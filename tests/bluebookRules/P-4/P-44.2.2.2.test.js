/**
 * P-44.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polycyclic systems. The senior polycyclic ring system occurs first in the following list of
 * polycyclic ring system types:
 * The seniority order between parent hydrides having the same number of identical heteroatoms, the
 * same number of rings, and the same number of skeletal atoms is a change from previous practice.
 * Seniority of polycyclic ring systems is now facilitated by a hierarchical order of ring systems,
 * which includes cyclic and acyclic phane systems and ranks all ring systems in the order given in
 * this recommendation.
 * (a) spiro ring system (see P-24);
 * (b) cyclic phane system (see P-26);
 * (c) fused ring system (see P-25);
 * (d) bridged fused ring system (see P-25);
 * (e) nonfused bridged ring system (see P-23);
 * (f) linear phane system (see P-26);
 * (g) ring assembly (see P-28).
 * Choices within each type are illustrated in P-44.2.2.2.1 through P-44.2.2.2.7.
 * Further criteria applicable to polycyclic ring systems are found in P-44.4.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2', [
  { pin: '8-azaspiro[4.5]decane' },
  { pin: 'quinoline' },
  { pin: '1,4(1,4)-dibenzenacyclohexaphane' },
  { pin: 'dibenzo[a,e][8]annulene' },
  { pin: 'naphthalene' },
  { pin: 'bicyclo[4.2.2]decane' },
  { pin: 'benzo[8]annulene' },
  { pin: '1,1′-biphenyl' },
]);
