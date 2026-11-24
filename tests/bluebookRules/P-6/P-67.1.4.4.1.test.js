/**
 * P-67.1.4.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups
 * There are two methods to generate names of acyl groups derived from the chalcogen acids for use as
 * substituent groups.
 * (1) The methodology described in P-65.3.2.3, i.e., infixes denoting functional replacement by -S-,
 * -Se-, -Te-, =NH, and =NNH2, and concatenation for other atoms or groups.
 * (2) The general method described in P-65.2.1.5 for deriving acyl groups from derivatives of carbonic
 * acid, and applied in P-67.1.4.1.1.4 for acyl groups derived from phosphoric, phosphonic and …
 * Method (1) produces preselected prefixes.
 * Method (2) cannot be applied to sulfurous acid, selenic acid and selenous acid, and telluric acid
 * and tellurous acid, because ambiguous names may result.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.4.1', [
  { formula: '–SO2–', preselectedPrefix: 'sulfonyl' },
  { formula: '–S(O)(S)–', preselectedPrefix: 'sulfonothioyl' },
  { formula: '–S(S)2–', preselectedPrefix: 'sulfonodithioyl' },
  { formula: '–S(O)(=NH)–', preselectedPrefix: 'sulfonimidoyl' },
  { formula: '–S(=NH)2–', preselectedPrefix: 'sulfonodiimidoyl' },
  { formula: '–S(O)(=NNH2)–', preselectedPrefix: 'sulfonohydrazonoyl' },
  { formula: '–S(=NNH2)2–', preselectedPrefix: 'sulfonodihydrazonoyl' },
  { formula: '–SO2-Cl', preselectedPrefix: 'chlorosulfonyl' },
  { formula: '–SO2-CN', preferredPrefix: 'cyanosulfonyl' },
  { formula: '–SO2-NCS', preferredPrefix: 'isothiocyanatosulfonyl' },
  { formula: '–S(O)(S)-NCS', preferredPrefix: 'isothiocyanatosulfonothioyl' },
  { formula: '–SO2-O-CH3', preferredPrefix: 'methoxysulfonyl' },
  { formula: '–S(=O)-Cl', preselectedPrefix: 'chlorosulfinyl' },
]);
