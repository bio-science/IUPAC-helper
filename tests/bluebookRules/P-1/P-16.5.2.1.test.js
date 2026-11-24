/**
 * P-16.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Brackets enclose descriptors denoting fusion sites in fused ring systems and enclose numbers
 * denoting the length of bridges and chains connecting spiro atoms in names of polyalicyclic ring
 * systems constructed according to von Baeyer methods. They also enclose ring assembly names when
 * these are followed by a principal group suffix or a cumulative suffix and enclose names of
 * components in von Baeyer spiro names.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.2.1', [
  { pin: 'naphtho[2,1-a]azulene' },
  { pin: 'bicyclo[3.2.1]octane' },
  { pin: 'spiro[4.5]decane' },
  { pin: 'spiro[cyclohexane-1,1′-indene]' },
]);
