/**
 * P-25.1.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyhelicenes. A hydrocarbon parent component of six or more rings that consists of a benzene ring
 * ortho-fused to the 3,4-position of phenanthrene and further benzene rings fused in a similar way is
 * named by citing a numerical prefix (‘hexa’, ‘hepta’, etc.) denoting the total number of benzene
 * rings forming a helical arrangement followed by the term ‘helicene’.
 * Note: The definition, orientation, and numbering of polyhelicenes was changed in the comprehensive
 * fused ring nomenclature document ‘Nomenclature of Fused and Bridged Fused Ring Systems’ (ref. 4). …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.2.6', [
  { pin: 'hexahelicene' },
]);
