/**
 * P-16.5.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Brackets enclose locants that describe structural features of components, such as double bonds in
 * bridges and heteroatoms of component rings in names of fused ring systems.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.2.2', [
  { pin: '6,7-(epiprop[1]en[1]yl[3]ylidene)benzo[a]cyclohepta[e][8]annulene' },
  { pin: '5H-pyrido[2,3-d][1,2]oxazine' },
]);
