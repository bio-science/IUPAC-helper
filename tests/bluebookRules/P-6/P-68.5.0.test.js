/**
 * P-68.5.0
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature
 * In substitutive nomenclature, halogen atoms are denoted only by specific prefixes (see P-61.3), in
 * functional class nomenclature by their class name (see P-15.2), and in functional replacement
 * nomenclature by prefixes and infixes (see P-65.2.1.5).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.5.0', [
  { formula: 'CH3-Cl', pin: 'chloromethane', otherNames: ['methyl chloride'] },
  { formula: 'C6H5-ClO', pin: 'chlorosylbenzene' },
  { formula: 'CH3-CH2-CO-Br', pin: 'propanoyl bromide', otherNames: ['propionyl bromide'] },
  { formula: 'CH3-CH2-SO2-Cl', pin: 'ethanesulfonyl chloride' },
  { formula: 'C6H5-P(O)Cl2', pin: 'phenylphosphonic dichloride' },
  { formula: 'CH3-BCl2', pin: 'dichloro(methyl)borane' },
  { formula: 'CH3P(Cl)(S-C2H5)', name: 'ethyl methylphosphonochloridothioite', notNames: ['ethyl methanephosphonochloridothioite'] },
]);
