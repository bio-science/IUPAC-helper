/**
 * P-66.1.1.4.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes derived from oxamide for use in multiplicative nomenclature
 * Concatenated preferred prefixes for the groups –HN-CO-CO-NH–, >N-CO-CO-N<, and =N-CO-CO-N= are
 * ‘oxalylbis(azanediyl)’, ‘oxalyldinitrilo’, and ‘oxalylbis(azanylylidene)’, respectively. The
 * preferred prefix for the group H2N-CO-CO-N< is ‘oxamoylazanediylְ.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.4.5.2', [
  { formula: 'NC-CH2-NH-CO-CO-NH-CH2-CN', pin: 'N¹,N²-bis(cyanomethyl)oxamide', notNames: ['2,2′-[oxalylbis(azanediyl)]diacetonitrile', '2,2′-[ethanedioylbis(azanediyl)]diacetonitrile'] },
]);
