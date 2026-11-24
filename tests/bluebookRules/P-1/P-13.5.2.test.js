/**
 * P-13.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By juxtaposition of component names (conjunctive nomenclature)
 * This method is used by Chemical Abstracts Service. It is not recommended for constructing preferred
 * IUPAC names; substitutive nomenclature is the recommended operation (see P-51). This method is most
 * commonly used when the two components to be joined are a ring or a ring system and a carbon chain
 * (or chains) substituted by the principal characteristic group of the compound. In this method, both
 * the principal characteristic group and the ring, or ring system, must terminate the chain; …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.5.2', [
  { pin: 'cyclohexane' },
  { pin: 'ethanol' },
  { pin: '2-cyclohexylethan-1-ol', otherNames: ['cyclohexaneethanol'] },
  { pin: 'cyclopentane' },
  { pin: 'cyclopentylacetic acid', otherNames: ['cyclopentaneacetic acid'] },
  { pin: '2-cyclopentylbutanoic acid', otherNames: ['α-ethylcyclpentaneacetic acid'] },
]);
