/**
 * P-44.2.2.2.4.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged fused ring system has the lower locants for heteroatoms in bridges, in the
 * order: F > Cl > Br > I > O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga >
 * In > Tl [criterion (g) in P-44.2.2.2.4].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.4.7', [
  { pin: '5,1-(epoxymethanosulfano)octalene' },
  { pin: '1,5-(epoxymethanosulfano)octalene' },
]);
