/**
 * P-15.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority of functional classes.
 * When two classes are present and both named by functional class nomenclature, the senior class must
 * be chosen in accordance with the seniority order of classes (see P-41). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1502d.gif', pin: 'methyl 4-chloro-4-oxobutanoate', otherNames: ['methyl 3-(chlorocarbonyl)propanoate', 'methyl 3-carbonochloridoylpropanoate'] },
  { formula: 'Cl-CH2-OH', pin: 'chloromethanol', otherNames: ['chloromethyl alcohol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1502e.gif', pin: 'cyanoacetyl chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1502f.gif', pin: 'methyl 4-methoxybutanoate' },
]);
