/**
 * P-25.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Selection of a less senior hydrocarbon parent component
 * A less preferred hydrocarbon parent component is selected that will permit a fusion name. Second and
 * third choice parent components are chosen according to the seniority order for selecting the senior
 * parent component (see P-25.3.2.4).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250502a.gif', pin: 'cyclobuta[1,7]indeno[5,6-b]naphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250502b.gif', pin: '10-azacyclobuta[1,7]indeno[5,6-b]anthracene' },
]);
