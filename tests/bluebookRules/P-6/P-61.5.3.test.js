/**
 * P-61.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “aci-Nitro compounds
 * Compounds containing the group =N(O)OH are named as derivatives of azinic acid, H2N(O)-OH, a
 * preselected name, and by using the prefix name hydroxy(oxo)-λ⁵-azanylidene, when a characteristic
 * group having priority for citation as a suffix is present. The use of the prefix ‘aci-nitro’ may be
 * used in general nomenclature (see P-67.1.6).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.5.3', [
  { formula: 'CH3-CH=N(O)-OH', pin: 'ethylideneazinic acid', otherNames: ['aci-nitroethane'] },
]);
