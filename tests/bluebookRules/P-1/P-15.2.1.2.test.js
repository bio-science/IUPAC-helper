/**
 * P-15.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the functional class name refers to a characteristic group that is divalent, the two
 * substituent groups attached to it are both expressed. When they are the same, appropriate numerical
 * prefixes are used. When different, they are written as separate words, in alphanumerical order,
 * locants being added as needed.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.2.1.2', [
  { formula: 'CH3-O-CO-CH2-CH2-CO-O-CH3', pin: 'dimethyl butanedioate', otherNames: ['dimethyl succinate'] },
  { formula: 'CH3-CO-O-CH2-CH2-O-CO-CH3', pin: 'ethane-1,2-diyl diacetate', otherNames: ['ethylene diacetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1502c.gif', pin: 'ethyl methyl benzene-1,3-dicarboxylate' },
  { formula: 'CH3-CH2-CO-CH2-CH3', pin: 'pentan-3-one', otherNames: ['diethyl ketone'] },
  { formula: 'CH3-CH2-CO-CH3', pin: 'butan-2-one', otherNames: ['ethyl methyl ketone'], notNames: ['methyl ethyl ketone'] },
]);
