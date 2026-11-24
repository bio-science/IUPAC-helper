/**
 * P-15.5.3.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names of acyclic polynitrogen functional parent compounds described in P-66.1.6 and
 * P-68.3.1 are modified by prefixes ‘thio’, ‘seleno’, and ‘telluro’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.5.3.4.3', [
  { formula: 'H2N-CS-NH2', pin: 'thiourea', otherNames: ['carbonothioic diamide'] },
  { formula: 'H2N-NH-CSe-NH2', pin: 'hydrazinecarboselenoamide', otherNames: ['selenosemicarbazide'] },
]);
