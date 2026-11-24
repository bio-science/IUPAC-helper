/**
 * P-61.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group having seniority to be named as a suffix or a parent
 * structure, nitro and nitroso groups can be attached to any atom. When linked to another nitrogen
 * atom they are not considered to lengthen the nitrogen chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610502a.gif', pin: '2-(tert-butylimino)-3-methyl-3-(nitrooxy)butanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610502b.gif', pin: 'N-methyl-N-nitrosourea' },
]);
