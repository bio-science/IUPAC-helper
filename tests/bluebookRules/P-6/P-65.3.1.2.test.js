/**
 * P-65.3.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Peroxy acids
 * The suffixes given in Table 6.2 are modified by the infix ‘peroxo’ for use in substitutive
 * nomenclature as illustrated by the following suffixes.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.1.2', [
  { formula: '–SO2-OOH', name: 'sulfonoperoxoic acid' },
  { formula: '–SeO-OOH', name: 'seleninoperoxoic acid' },
  { formula: 'CH3-SO2-OOH', pin: 'methanesulfonoperoxoic acid' },
  { formula: 'C6H5-TeO-OOH', pin: 'benzenetellurinoperoxoic acid' },
]);
