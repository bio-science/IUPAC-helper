/**
 * P-72.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes for anionic centers derived from acid characteristic groups
 * Substituent anions derived from acid characteristic groups by removal of a hydron from all hydroxy,
 * thiol, etc. groups or a chalcogen analogue, and that are attached to the parent structure by a
 * single bond are named by prefixes formed by changing the ending ‘ate’ in the name of the anionic
 * suffix to ‘ato’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.6.1', [
  { formula: '–CO-O⁻', preferredPrefix: 'carboxylato' },
  { formula: '–SO2-O⁻', preselectedPrefix: 'sulfonato' },
  { formula: '–P(O)(O⁻)2', preselectedPrefix: 'phosphonato' },
  { formula: '–As(O)(O⁻)2', preselectedPrefix: 'arsonato' },
]);
