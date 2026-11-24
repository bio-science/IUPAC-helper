/**
 * P-21.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systematic and traditional names
 * If the bonding number of the element differs from the standard one as defined in P-14.1 and
 * exemplified in Table 2.1, the name of the hydride is modified by affixing the symbol λn, where ‘n’
 * is the bonding number, to the name of the hydride (ref. 13).
 * The names ‘phosphorane’ for PH5, ‘arsorane’ for AsH5, and ‘stiborane’ for SbH5, are retained for use
 * in general nomenclature. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.1.2.1', [
  { formula: 'IH3', preselectedName: 'λ³-iodane', notNames: ['iodinane'] },
  { formula: 'SH4', preselectedName: 'λ⁴-sulfane', notNames: ['sulfurane'] },
  { formula: 'SnH2', preselectedName: 'λ²-stannane' },
  { formula: 'PH5', preselectedName: 'λ⁵-phosphane', otherNames: ['phosphorane'] },
  { formula: 'AsH5', preselectedName: 'λ⁵-arsane', otherNames: ['arsorane'] },
  { formula: 'SbH5', preselectedName: 'λ⁵-stibane', otherNames: ['stiborane'] },
]);
