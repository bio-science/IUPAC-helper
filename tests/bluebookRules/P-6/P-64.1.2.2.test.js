/**
 * P-64.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterones
 * Heterones are compounds having an oxygen atom formally doubly bonded to a heteroatom (see P-61.6 and
 * P-64.4; see also P-68). They are named in the same way as ketones except when expressed as
 * compulsory prefixes, such as sulfonyl (see Table 5.1 and P-59.1.9)”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.1.2.2', [
  { formula: 'CH3-PO2', pin: 'methyl-λ⁵-phosphanedione', otherNames: ['methyldi(oxo)-λ⁵-phosphane'], notNames: ['phosphomethane'] },
  { formula: 'CH3SiH=O', pin: 'methylsilanone', otherNames: ['methyl(oxo)silane'] },
  { formula: 'C6H5-P=O', pin: 'phenylphosphanone', otherNames: ['oxo(phenyl)phosphane'], notNames: ['phosphorosobenzene'] },
]);
