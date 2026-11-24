/**
 * P-68.3.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution of diazene
 * Diazene is a modified parent hydride derived from the parent hydride diazane (see P-68.3.1.2.1) The
 * prefix ‘diazenyl’ is a preselected prefix (see P-32.1.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313a.gif', pin: 'diazenedicarbaldehyde' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313b.gif', pin: 'phenyldiazenecarbonitrile' },
  { formula: 'HN=N-CH2-CH2-COOH', pin: '3-diazenylpropanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313c.gif', pin: '3,4-bis(diazenyl)benzoic acid' },
]);
