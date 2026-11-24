/**
 * P-35.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Simple prefixes derived from functional parent compounds
 * A few simple prefixes are derived from functional parent compounds described in P-34 and in P-67.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-35.2.3', [
  { formula: '–CO–', preferredPrefix: 'carbonyl' },
  { formula: '–PO<', preselectedPrefix: 'phosphoryl' },
  { formula: '–SO2–', preselectedPrefix: 'sulfonyl' },
  { formula: '–SO–', preselectedPrefix: 'sulfinyl' },
  { formula: '–SeO2–', preselectedPrefix: 'selenonyl' },
  { formula: '–SeO–', preselectedPrefix: 'seleninyl' },
  { formula: '–TeO2–', preselectedPrefix: 'telluronyl' },
  { formula: '–TeO–', preselectedPrefix: 'tellurinyl' },
  { formula: 'CH3-CO–', preferredPrefix: 'acetyl' },
  { formula: 'C6H5-CO–', preferredPrefix: 'benzoyl' },
]);
