/**
 * P-25.4.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A divalent acyclic hydrocarbon bridge is named as a prefix derived from the corresponding
 * unbranched hydrocarbon name by changing the final letter ‘e’ to ‘o’. The locant for a double bond,
 * if present, is indicated in square brackets between the hydrocarbon prefix and the ending ‘eno’;
 * this locant is not the locant used in the final numbering of the bridged fused ring system (see
 * P-25.4.4). If there is a choice, low numbers are preferred (e.g., prop[1]eno rather than
 * prop[2]eno).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.2.1.1', [
  { preferredPrefix: 'methano' },
  { preferredPrefix: 'ethano' },
  { preferredPrefix: 'propano' },
  { preferredPrefix: 'etheno' },
  { preferredPrefix: 'prop[1]eno' },
  { preferredPrefix: 'but[1]eno' },
  { preferredPrefix: 'but[2]eno' },
  { preferredPrefix: 'buta[1,3]dieno' },
]);
