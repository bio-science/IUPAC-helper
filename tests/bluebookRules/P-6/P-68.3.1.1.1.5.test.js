/**
 * P-68.3.1.1.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydroxylamine expressed as prefixes
 * In the presence of a characteristic group having priority for citation as suffix or in the presence
 * of a senior parent hydride, appropriate compound or complex prefixes are used:”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.1.5', [
  { formula: '–NH-OH', preselectedPrefix: 'hydroxyamino' },
  { formula: '>N-OH', preselectedPrefix: 'hydroxyazanediyl' },
  { formula: '–O-NH2', preselectedPrefix: 'aminooxy' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311c.gif', pin: '4-(hydroxyamino)phenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311d.gif', pin: '2-(aminooxy)ethan-1-amine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311e.gif', pin: '3,3′-(hydroxyazanediyl)dibenzoic acid' },
]);
