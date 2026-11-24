/**
 * P-44.2.2.2.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior bridged nonfused ring system has the lower number in the descriptor set for describing
 * ring sizes at the first point of difference when considered in order of citation in the name
 * [criteria (a) in P-44.2.2.2.5].”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.5.1', [
  { pin: 'bicyclo[2.2.2]octane' },
  { pin: 'bicyclo[3.2.1]octane' },
]);
