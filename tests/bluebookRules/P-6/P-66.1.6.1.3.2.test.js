/**
 * P-66.1.6.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of isourea are named by functional replacement nomenclature using the
 * appropriate chalcogen infixes, for example, carbamimidothioic acid, not isothiourea. The italic
 * locants N, and N′ are used for preferred IUPAC names. When the position of the double bond is not
 * known, locants S or Se or Te and N are used to assign substituents to appropriate atoms.
 * For the example just above, when the position of the double bond is not known the names would be:”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161t.gif', pin: 'carbamimidothioic acid', notNames: ['isothiourea'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161u.gif', pin: 'ethyl N,N-dimethylcarbamimidothioate', notNames: ['S-ethyl-N,N-dimethylisothiourea'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161v.gif', pin: 'ethyl N′-methylcarbamimidothioate', notNames: ['S-ethyl-N′-methylisothiourea'] },
  { pin: 'ethyl N-methylcarbamimidothioate', notNames: ['S-ethyl-N-methylisothiourea'] },
]);
