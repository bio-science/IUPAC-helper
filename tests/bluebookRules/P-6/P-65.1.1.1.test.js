/**
 * P-65.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names as preferred IUPAC names
 * Only the following five carboxylic acids are retained names and are also preferred IUPAC names. All
 * can be functionalized, but only acetic acid, benzoic acid, and oxamic acid can be substituted
 * according to P-15.1.8.2.1; for substitution rules regarding formic acid, see P-65.1.8. Systematic
 * substitutive names are used to generate acids modified by functional replacement.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.1.1', [
  { formula: 'HCOOH', pin: 'formic acid', otherNames: ['methanoic acid'] },
  { formula: 'HOOC-COOH', pin: 'oxalic acid', otherNames: ['ethanedioic acid'] },
  { formula: 'CH3-COOH', pin: 'acetic acid', otherNames: ['ethanoic acid'] },
  { formula: 'C6H5-COOH', pin: 'benzoic acid', otherNames: ['benzenecarboxylic acid'] },
  { formula: 'H2N-CO-COOH', pin: 'oxamic acid', otherNames: ['amino(oxo)acetic acid'] },
]);
