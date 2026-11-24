/**
 * P-66.1.1.3.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Locants for geminal carboxamide groups
 * When geminal carboxamide groups are present, the locants N, N′, etc. are used in association with
 * the numerical locant indicating the position of the groups on a chain or ring. Lowest locants are
 * assigned to the most substituted group; when there is a choice, lowest locants are assigned to the
 * first cited N-substituent.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.3.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113i.gif', pin: 'N′¹-ethyl-N¹,N¹,N³-trimethylpropane-1,1,3-tricarboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113j.gif', pin: 'N¹-ethyl-N′¹,N³-dimethylpropane-1,1,3-tricarboxamide' },
]);
