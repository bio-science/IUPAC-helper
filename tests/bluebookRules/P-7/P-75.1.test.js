/**
 * P-75.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “RADICAL IONS FORMED BY THE ADDITION OR REMOVAL OF ELECTRONS
 * Radical ions formed by the addition or removal of electrons may be named in two ways.
 * (1) by using the suffixes ‘elide’ and ‘elium’ in substitutive nomenclature, whereby radical ions
 * derived formally from a neutral parent hydride, parent compound, or hydro derivative of either by
 * the …
 * Note: This new method may be used to indicate a global structure, when the positions of the radical
 * and/or ionic centers are not known, or when it is not necessary, nor desirable, to name a specific …
 * (2) by functional class nomenclature, whereby radical ions derived formally from a neutral parent
 * hydride, parent compound, or hydro derivative of either by the addition or removal of electrons may
 * …
 * The substitutive method (1) leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-75.1', [
  { formula: '[C6H5-C6H5]⁽²•⁾⁽²⁻⁾', name: 'biphenyl diradical dianion' },
  { formula: '[C10H8]•⁺', pin: 'azulenelium', otherNames: ['azulene radical cation', 'azulene radical ion(1+)'] },
]);
