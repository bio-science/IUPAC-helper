/**
 * P-25.3.3.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If alternative numberings for a ring system remain after the application of P-25.3.3.1.1 (including
 * alternative locations for heteroatoms), the following criteria are applied in order until a decision
 * is reached:
 * (a) low locants are assigned to heteroatoms, considered as a set without regard to the kind of
 * heteroatom;
 * (b) low locants are assigned to heteroatoms in the order: F > Cl > Br > I > O > S > Se > Te > N > P
 * > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl;
 * (c) low locants are assigned to fusion carbon atoms;
 * (d) low locants are assigned to fusion rather than nonfusion heteroatoms of the same element;
 * (e) low locants are assigned so that an interior heteroatom is nearer (i.e., fewer bonds in the
 * pathway) to the lowest numbered fusion peripheral atom (see P-25.3.3.2 for interior numbering);
 * (f) low locants are assigned to indicated hydrogen atoms (expressed or implied);”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 237, P-25.3.3.1.2 (d), example.. [corrected 12 May 2021]
 *     For [1,3]diazeto[1,2-a:3,4-a′]dibenzimidazole (PIN)
 *     read [1,3]diazeto[1,2-a:3,4-a′]dibenzimidazole
 *     add [1,3]diazeto[1,2-a:3,4-a′]bis([1,3]benzimidazole) (PIN)
 *   Page 238, P-25.3.3.1.2 (f), example 2, right version. [corrected 10 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.3.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303g.gif', pin: 'cyclopenta[b]pyran' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303h.gif', pin: '2H,4H-[1,3]oxathiolo[5,4-b]pyrrole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303i.gif', pin: 'thieno[2,3-b]furan' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303j.gif', pin: '1H-thieno[2,3-d]imidazole' },
  { pin: 'azulene' },
  { pin: 'imidazo[1,2-b][1,2,4]triazine' },
  { pin: '6H-quinolizino[3,4,5,6-ija]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303t.gif', pin: '1H-cyclopenta[l]phenanthrene' },
]);
