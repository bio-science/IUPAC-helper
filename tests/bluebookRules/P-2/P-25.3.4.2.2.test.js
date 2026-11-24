/**
 * P-25.3.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Order of seniority for selecting attached components
 * After selection of the parent component (see P-25.3.2.4) [or parent components and interparent
 * component(s) if a multiparent name is chosen], other rings are identified as far as possible as
 * attached components. If there is a choice, first-order attached components are considered first,
 * then second-order attached components, etc. The following criteria are applied in order only until a
 * complete decision is made:
 * Note: In the examples below, the preferred attached component is marked with a solid box and the
 * alternatives with dashed boxes.
 * (a) if there are alternative first-order attached components, the senior ring or ring system is
 * selected. The same procedure is applied to second-order attached components, and so on;
 * (b) the location that has lowest locants as a set for fusion of first-order attached components to
 * the parent component;
 * (c) the location that has lowest locants for fusion to the parent component in order of citation.
 * This procedure is continued exploring outwards to the senior second-order attached components.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 246, P-25.3.4.2.2 (a) example. [corrected 19 September 2018]
 *     For 8H-cyclopenta[3,4]napththo[1,2-d][1,3]oxazole (PIN)
 *     read 8H-cyclopenta[3,4]naphtho[1,2-d][1,3]oxazole (PIN)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304k.gif', pin: '8H-cyclopenta[3,4]naphtho[1,2-d][1,3]oxazole', notNames: ['8H-benzo[6,7]indeno[5,4-d][1,3]oxazole'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304l.gif', pin: '5H-benzo[6,7]cyclohepta[4′,5′]indeno[1′,2′:3,4]fluoreno[2,1-b]furan', notNames: ['5H-benzo[5′,6′]indeno[1′,2′:1,2]cyclohepta[7,8]fluoreno[4,3-b]furan'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304m.gif', pin: 'naphtho[2′,1′:3,4]phenanthro[1,2-b]thiophene', notNames: ['naphtho[2′,1′:3,4]phenanthro[2,1-b]thiophene', 'not dibenzo[3,4:5,6]phenanthro[9,10-b]thiophene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304n.gif', pin: '7H-pyrrolo[2′′,1′′:1′,2′]isoquinolino[4′,3′:4,5]cyclopenta[1,2-b]acridine', notNames: ['7H-benzo[7′,8′]indolizino[6′,5′:4,5]cyclopenta[1,2-b]acridine'] },
]);
