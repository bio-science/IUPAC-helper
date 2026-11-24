/**
 * P-67.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The disulfurous acid name dilemma
 * The name disulfurous acid should correspond to the structure HO-SO-O-SO-OH implied for all
 * homogeneous diacids in accordance with the definition given in P-67.2. As the reported structure,
 * HO-SO-SO2-OH, is called ‘disulfurous acid’ in the Nomenclature of Inorganic Chemistry (ref. 12) a
 * different name must be assigned to HO-SO-O-SO-OH. A substitutive name is appropriate in this
 * situation.
 * Since the name ‘disulfurous acid’ is used for HO-SO-SO2-OH in the Nomenclature of Inorganic
 * Chemistry ref. 12), it cannot be used in the systematic way for HO-SO-O-SO-OH. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.3.2', [
  { formula: 'HO-SO-O-SO-OH', preselectedName: '1,3-dihydroxy-1λ⁴,3λ⁴-dithioxane-1,3-dione' },
  { formula: 'CH3-O-S(=O)-O-S(=O)-O-CH3', pin: '1,3-dimethoxy-1λ⁴,3λ⁴-dithioxane-1,3-dione' },
  { formula: 'CH3-O-S(=NH)-O-S(=NH)-O-CH3', pin: '1,3-dimethoxy-1λ⁴,3λ⁴-dithioxane-1,3-diimine' },
]);
