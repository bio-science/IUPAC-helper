/**
 * P-62.2.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The names ‘toluidine’, ‘anisidine’, and ‘phenetidine’ for which o-, m-, and p- have been used to
 * distinguish isomers, and ‘xylidine’ for which numerical locants, such as 2,3-, have been used, are
 * no longer recommended, nor are the corresponding prefixes ‘toluidino’, ‘anisidino’, ‘phenetidino’,
 * and ‘xylidino’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201e.gif', pin: '4-methylaniline', otherNames: ['4-methylbenzenamine'], notNames: ['p-toluidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620201f.gif', preferredPrefix: '4-methylanilino', notNames: ['p-toluidino'] },
]);
