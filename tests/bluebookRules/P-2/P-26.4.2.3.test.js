/**
 * P-26.4.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If, after the application of P-26.4.2.2, a choice is still necessary and a single unsymmetrical
 * amplificant remains, P-26.4.2.1 is applied to the single unsymmetrical amplificant.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.4.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260402i.gif', pin: '3(2,5),7(2,6)-dipyridina-5(2,5)-furana-1,9(1)-dibenzenanonaphane', notNames: ['3(2,5),7(2,6)-dipyridina-5(5,2)-furana-1,9(1)-dibenzenanonaphane'] },
  { pin: '1(4,2),9(2,4)-diquinolina-3,7(4,2)-dipyridina-5(3,5)-[1,2]oxazolacyclotetradecaphane (I)', notNames: ['1(2,4),9(4,2)-diquinolina-3,7(2,4)-dipyridina-5(5,3)-[1,2]oxazolacyclotetradecaphane (II)'] },
]);
