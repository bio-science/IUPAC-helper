/**
 * P-68.4.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfoximides, R2E(=O)=NR′ (E = S), and chalcogen analogues where E = Se, Te.
 * Compounds with the general structure R2E(=O)=NR′ have the class name ‘sulfoximides’ (CAS calls them
 * sulfoximines). …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.6', [
  { formula: '(CH3)2S(=O)=N-C6H5', pin: 'dimethyl(phenylimino)-λ⁶-sulfanone', otherNames: ['S,S-dimethyl-N-phenylsulfoximide'] },
]);
