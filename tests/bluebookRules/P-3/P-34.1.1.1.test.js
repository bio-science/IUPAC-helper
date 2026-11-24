/**
 * P-34.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acids”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-34.1.1.1', [
  { formula: 'CH3-COOH', pin: 'acetic acid', otherNames: ['ethanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340101a.gif', pin: 'benzoic acid', otherNames: ['benzenecarboxylic acid'] },
  { formula: 'H2N-COOH', pin: 'carbamic acid', otherNames: ['carbonamidic acid'] },
  { formula: 'HO-CO-OH', pin: 'carbonic acid' },
  { formula: 'NC-OH', pin: 'cyanic acid', otherNames: ['carbononitridic acid'] },
  { formula: 'H-COOH', pin: 'formic acid', otherNames: ['methanoic acid'] },
  { formula: 'HOOC-COOH', pin: 'oxalic acid', otherNames: ['ethanedioic acid'] },
  { formula: 'H2N-CO-COOH', pin: 'oxamic acid', otherNames: ['amino(oxo)acetic acid'] },
  { formula: 'H2N-C(=NH)-OH', name: 'carbamimidic acid' },
]);
