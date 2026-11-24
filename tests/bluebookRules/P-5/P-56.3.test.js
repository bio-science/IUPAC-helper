/**
 * P-56.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “THE SUFFIXES ‘IMIDAMIDE’ AND ‘CARBOXIMIDAMIDE’
 * The suffixes ‘amidine’ and ‘carboxamidine’, for –C(=NH)-NH2 and –(C)(=NH)-NH2, are no longer
 * recommended. They are replaced by the new functional replacement suffixes ‘imidamide’ and
 * ‘carboximidamide’ in preferred IUPAC names (see P-66.4.1).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-56.3', [
  { formula: 'CH3-C(=NH)-NH2', pin: 'ethanimidamide' },
  { formula: 'C6H11-C(=NH)-NH2', pin: 'cyclohexanecarboximidamide' },
]);
