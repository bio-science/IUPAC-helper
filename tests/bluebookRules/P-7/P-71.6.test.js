/**
 * P-71.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ORDER OF CITATION AND SENIORITY OF SUFFIXES ‘YL’, ‘YLIDENE’, AND ‘YLIDYNE’
 * The suffixes ‘yl’, ‘ylidene’, and ‘ylidyne’ are cited in that order in a name, if applicable; lowest
 * locants are assigned to radicals as a set, then in the order ‘yl’, ‘ylidene’ and ‘ylidyne’. The
 * order of citation is identical to that used for naming substituent groups (see P-29.3.2.2).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.6', [
  { formula: '•CH2-CH²•', pin: 'ethan-1-yl-2-ylidene' },
]);
