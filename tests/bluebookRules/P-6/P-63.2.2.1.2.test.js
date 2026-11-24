/**
 * P-63.2.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent prefixes for the substituent groups R′S–, R′Se–, and R′Te–, are formed by substitution
 * of the groups HS–, ‘sulfanyl’, HSe–, ‘selanyl’; and HTe–, ‘tellanyl’; they require the
 * multiplicative prefixes ‘bis’, ‘tris’, etc. The former names ‘thio’, –S–; ‘seleno’, –Se–; and
 * ‘telluro’, –Te– may be used as additive prefixes in general nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.2.1.2', [
  { formula: 'CH3-S–', preferredPrefix: 'methylsulfanyl' },
  { formula: 'C6H5-Se–', preferredPrefix: 'phenylselanyl' },
]);
