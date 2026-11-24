/**
 * P-102.5.6.6.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of individual uronic acids are formed by changing the ending ‘ose’ in the retained or
 * systematic name of the corresponding aldose to ‘uronic acid’. The numbering of the aldose is kept
 * intact; the locant ‘1’ is still assigned to the (potential) aldehydic group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566n.gif', name: 'D-glucuronic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566o.gif', name: 'α-D-glucopyranuronic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566p.gif', name: 'β-D-galactopyranuronic acid' },
]);
