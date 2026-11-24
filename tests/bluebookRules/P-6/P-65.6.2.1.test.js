/**
 * P-65.6.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Neutral salts of acids are named by citing the name of the cation(s) followed by the name of the
 * anion (see P-72.2.2.2) as a separate word. Different cations are cited in alphabetical order.
 * Formation of salts is a functionalization and not a substitution. Thus, all retained names, both
 * those used as preferred IUPAC names and those used only for general nomenclature, can be used
 * without restriction. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.2.1', [
  { formula: 'CH3-CH2-CH2-COO⁻ K⁺', pin: 'potassium butanoate' },
  { formula: 'CH3-CH2-CS-S⁻ Na⁺', pin: 'sodium propane(dithioate)' },
  { formula: '(CH3-COO⁻)2 Ca²⁺', pin: 'calcium diacetate' },
  { formula: 'C6H5-SO-O⁻ Na⁺', pin: 'sodium benzenesulfinate' },
  { formula: 'K⁺ ⁻OOC-CH2-CH2-COO⁻ Na⁺', pin: 'potassium sodium butanedioate', otherNames: ['potassium sodium succinate'] },
  { formula: 'NH4⁺ ⁻OOC-CH2-CH2-CH2-CH2-COO⁻ K⁺', pin: 'ammonium potassium hexanedioate', otherNames: ['ammonium potassium adipate'] },
  { formula: 'C(O)O2²⁻ 2Na⁺', pin: 'disodium carbonate' },
  { formula: '(CH3-COO⁻)4 Ge⁴⁺', pin: 'germanium tetraacetate' },
]);
