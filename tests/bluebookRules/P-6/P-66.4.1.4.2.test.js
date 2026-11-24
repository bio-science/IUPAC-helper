/**
 * P-66.4.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Geminal carboxamidine groups
 * When geminal carboxamidine groups are present, the locants N, N′, N′′, N′′′ are used. Lowest locants
 * are assigned to the most substituted group; when there is a choice, lowest locants are assigned to
 * the first cited N-substituent. For polyamidines with at least one pair of geminal amidine groups,
 * superscripted numerical locants indicating the position of the amidine group on a chain or cycle are
 * used. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66414e.gif', pin: 'N′′′¹-ethyl-N¹,N¹-dimethylcyclohexane-1,1-dicarboximidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66414f.gif', pin: 'N′′¹-ethyl-N¹,N¹,N³,N³-tetramethylcyclohexane-1,1,3-tricarboximidamide' },
]);
