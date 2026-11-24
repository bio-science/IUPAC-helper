/**
 * P-68.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mononuclear hydrides
 * The names of the mononuclear hydrides are listed in Table 2.1. The standard bonding number is 3 and
 * the λ-convention (see P-14.1) is used to indicate nonstandard bonding numbers. The names of these
 * parent hydrides are all preselected names (see P-12.2).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.1', [
  { formula: 'BH3', preselectedName: 'borane' },
  { formula: 'BH', preselectedName: 'λ¹-borane' },
  { formula: 'AlH3', preselectedName: 'alumane' },
  { formula: 'GaH3', preselectedName: 'gallane' },
  { formula: 'InH3', preselectedName: 'indigane' },
  { formula: 'TlH3', preselectedName: 'thallane' },
]);
