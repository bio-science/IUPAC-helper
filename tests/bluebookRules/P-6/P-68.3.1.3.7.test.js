/**
 * P-68.3.1.3.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Isodiazenes, R2N⁺=N⁻
 * Compounds with the general structure R2N-N: ↔ R2N⁺=N⁻ are called ‘isodiazenes’ generically and are
 * named substitutively on the basis of the parent radical ‘hydrazinylidene’, H2N-N:. This method leads
 * to preferred IUPAC names rather than the names based on the parent hydride name ‘isodiazene’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.7', [
  { formula: '(CH3)2N-N:', pin: 'dimethylhydrazinylidene', otherNames: ['dimethylisodiazene'] },
]);
