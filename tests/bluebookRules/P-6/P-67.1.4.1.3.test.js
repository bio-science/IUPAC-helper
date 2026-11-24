/**
 * P-67.1.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compound and complex substituent groups
 * If a B, N, P, As, or Sb containing group is attached by an oxygen or other chalcogen atom or a
 * nitrogen atom to a compound that also contains another substituent having priority over the B, N, P,
 * As, or Sb containing group for citation as principal group, then the B, N, P, As, or Sb containing
 * group is named by a compound or complex prefix built from prefixes described above and arranged in
 * the order in which the components occur in the compound.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.1.3', [
  { formula: '(CH3O)2P(O)-S-CH2-CH2-COOH', pin: '3-[(dimethoxyphosphoryl)sulfanyl]propanoic acid' },
  { formula: '(HO)(HS)P(S)-NH-CH2-CH2-COOH', pin: '3-{[hydroxy(sulfanyl)phosphorothioyl]amino}propanoic acid' },
]);
