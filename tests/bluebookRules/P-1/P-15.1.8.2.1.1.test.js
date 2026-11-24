/**
 * P-15.1.8.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution by substituent groups, expressed as prefixes, having a lower seniority than that
 * denoted by the suffix is allowed.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.8.2.1.1', [
  { formula: 'H2N-CH2-CO-CH3', pin: '1-aminopropan-2-one', otherNames: ['aminoacetone'] },
  { formula: 'HS-CH2-COOH', pin: 'sulfanylacetic acid' },
  { formula: 'HOOC-CH2-COOH', pin: 'propanedioic acid', otherNames: ['malonic acid'], notNames: ['2-carboxyacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501o.gif', pin: 'benzene-1,2-dicarboxylic acid', otherNames: ['phthalic acid'], notNames: ['2-carboxybenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501p.gif', pin: 'benzene-1,2,4-tricarboxylic acid', notNames: ['2,4-dicarboxybenzoic acid', '4-carboxyphthalic acid'] },
]);
