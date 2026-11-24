/**
 * P-66.5.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds with the general structure R-C≡NO have the generic name ‘nitrile oxides’. As they may be
 * considered as zwitterions, they are classed with zwitterions in the order of compound classes. They
 * are named by three methods:
 * (1) by the term ‘oxide’, ‘sulfide’, ‘selenide’, or ‘telluride’ added to the name of the nitrile (see
 * P-74.2.2.2.1.2).
 * (2) by applying the λ-convention and oxo substitution to the nitrogen atom (see P-14.1);
 * (3) as zwitterions (see P-74.2.2.2.1.2).
 * Method (1) leads to preferred IUPAC names”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.4.1', [
  { formula: 'C6H5-C≡N⁺–O⁻', pin: 'benzonitrile oxide', otherNames: ['benzylidyne(oxo)-λ⁵-azane', '(benzylidyneazaniumyl)oxidanide'] },
  { formula: 'HC≡N⁺–O⁻', pin: 'formonitrile oxide', otherNames: ['methylidyne(oxo)-λ⁵-azane', '(methylidyneazaniumyl)oxidanide'] },
]);
