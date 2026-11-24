/**
 * P-52.2.4.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A less preferred parent ring or ring system component is selected that will permit a fusion name.
 * Second and third choice of parent rings or ring system parent components may be chosen according to
 * the seniority order for selecting the senior ring or ring system as the parent for naming the fused
 * ring system (see P-25.3.2.4).
 * Explanation: Anthracene cannot be selected as senior parent component; naphthalene, not indene, is
 * next in seniority order for selection as a parent component.
 * Explanation: Neither quinoline nor pyridine can be used as the senior parent component because
 * neither naphthalene nor anthracene, respectively, can be used as the senior attached component; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.4.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204g.gif', pin: 'cyclobuta[1,7]indeno[5,6-b]naphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204h.gif', pin: '10-azacyclobuta[1,7]indeno[5,6-b]anthracene' },
]);
