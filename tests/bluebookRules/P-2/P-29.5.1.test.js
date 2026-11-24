/**
 * P-29.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Complex substituted substituent groups
 * Complex substituted substituent groups are formed by substituting an acyclic compound substitutive
 * substituent group into an acyclic substituent group, or into a cyclic substituent group, in
 * accordance with the order of seniority of chains and rings and ring systems (P-44).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290501a.gif', preferredPrefix: '6-(3-methylbutyl)undecyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290501b.gif', preferredPrefix: '2-(germylmethyl)cyclohexyl' },
]);
