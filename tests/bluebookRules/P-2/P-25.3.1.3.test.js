/**
 * P-25.3.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General principles
 * ‘ortho-Fused’ or ‘ortho- and peri-fused’ polycyclic ring systems with the maximum number of
 * noncumulative double bonds (mancude) that have no accepted retained or systematic name described in
 * sections P-25.1 and P-25.2 are named by prefixing to the name of a component ring or ring system
 * (the parent component) designations of the other component(s) (attached components). For fused ring
 * systems in preferred IUPAC names, see P-52.2.4.
 * The parent component is selected by applying criteria of seniority as described in P- 25.3.2.4
 * below. In a fusion name, the name of the parent component is that of the component itself. …
 * Locants that describe structural features of components, such as positions of heteroatoms, are kept
 * with the name of the component and are enclosed within square brackets.
 * Note: In preferred IUPAC names the elision of the final letter ‘o’ of ‘acenaphtho’, ‘benzo’,
 * ‘naphtho’ and ‘perylo’ and the final letter ‘a’ of the monocyclic prefixes ‘cyclopropa’,
 * ‘cyclobuta’, etc. …
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.1.3', [
  { pin: 'azulene (PIN) + naphthalene' },
  { pin: 'naphtho[1,2-a]azulene' },
  { pin: 'azulene (PIN) + naphthalene' },
  { pin: 'naphtho[2,1-a]azulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250301i.gif', pin: 'selenopheno[2,3-b]selenophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250301j.gif', pin: 'selenopheno[3,4-b]selenophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250301k.gif', pin: 'selenopheno[3,2-b]selenophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250301l.gif', name: '6H-pyrrolo[3,2,1-de]acridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250301m.gif', name: 'naphtho[2,1,8-mna]acridine' },
]);
