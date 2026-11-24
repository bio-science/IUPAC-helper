/**
 * P-44.2.2.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The senior spiro system consists only of discrete components [criterion (c) in P-44.2.2.2.1] and:
 * (a) has the senior component determined by criteria above and below for the appropriate type of ring
 * or ring system when the components are compared in their order of seniority;
 * (b) has the senior component determined by criteria above and below for the appropriate kind of ring
 * or ring system when compared in their order of citation in the name;
 * (c) has the lower locant(s) for the spiro atoms in the order of citation in the name.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.1.3', [
  { pin: '2′H-spiro[cyclopentane-1,1′-isoquinoline]' },
  { pin: 'spiro[indene-1,4′-piperidine]' },
]);
