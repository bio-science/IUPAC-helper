/**
 * P-44.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal chain has the greater number of skeletal atoms [criterion (b) in P-44.3].
 * In acyclic parent structures the order of seniority between unsaturation and length of chain given
 * in earlier recommendations is reversed. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.3.2', [
  { pin: 'pentane' },
  { pin: 'butane' },
  { pin: 'octane' },
  { pin: 'hept-1-ene' },
  { pin: 'trideca-1,3-diene' },
  { pin: 'octa-1,3,5,6-tetraene' },
  { pin: '3,6,9,12-tetraoxapentadecane' },
  { pin: '3,6,9,12-tetraoxatetradecane' },
  { pin: '2,5,8,11-tetrasilatridecane' },
  { preselectedName: 'tetrasilane' },
  { pin: '2,5,8,11,14-pentasilapentadecane' },
  { preselectedName: 'trisiloxane' },
]);
