/**
 * P-22.2.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If two or more kinds of heteroatoms occur in the same name, their order of citation follows the
 * sequence: F, Cl, Br, I, O, S, Se, Te, N, P, As, Sb, Bi, Si, Ge, Sn, Pb, B, Al, Ga, In, Tl. The
 * locant ‘1’ is given to a heteroatom that occurs first in the seniority sequence used for citation of
 * the skeletal replacement (‘a’) prefixes. The numbering is then chosen to give lowest locants to
 * heteroatoms considered as a set in ascending numerical order. …
 * If there is a further choice, lowest locants are assigned to heteroatoms in the order that they
 * appear in the seniority sequence (see Table 2.4).”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202e.gif', pin: '1,3-thiazole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202f.gif', pin: '1,2-oxathiolane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202g.gif', pin: '1,2,6-oxadithiepane', notNames: ['1,3,7-oxadithiepane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202h.gif', pin: '1,6,2-dioxazepane', notNames: ['1,3,4-dioxazepane', '1,3,7-dioxazepane', '1,6,5-dioxazepane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202i.gif', pin: '1,2,5-oxazaphosphole', notNames: ['1,5,2-oxazaphosphole'] },
]);
