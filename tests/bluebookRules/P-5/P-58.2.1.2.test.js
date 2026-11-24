/**
 * P-58.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In parent hydrides, indicated hydrogen atoms (see P-14.7) are cited, if posible, at the lowest
 * nonfusion peripheral atom (see P-25.0) of the ring or ring system consistent with the maximum number
 * of noncumulative double bonds in accordance with P-25.7. Low locants are assigned to indicated
 * hydrogen atoms when the degree of unsaturation is modified by using ‘hydro’ prefixes.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 616, P-58.2.1.2, example 4. [corrected 26 May 2021]
 *     For 1H,2H-3a,7a-methano[2]benzofuran (PIN)
 *     read 1H,2H-3a,7a-methano-2-benzofuran (PIN)
 *   Page 617, P-58.2.1.2, example 1 on this page. [corrected 25 August 2016]
 *     For (not 2,3-dihydro-4H-1-benzoyran;...
 *     read (not 2,3-dihydro-4H-1-benzopyran;...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201a.gif', pin: '1H-pyrrole' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201b.gif', pin: '2H-1-benzopyran' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201c.gif', pin: '2H,5H-pyrano[2,3-b]pyran' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201d.gif', pin: '1H,3H-3a,7a-methano-2-benzofuran' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201e.gif', pin: '1′H,2H-1,2′-spirobi[azulene]' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201f.gif', pin: '1H,1′H-1,1′-biindene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201g.gif', pin: '2,3-dihydro-1H-indene', notNames: ['1,3-dihydro-2H-indene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201h.gif', pin: '3,4-dihydro-2H-1-benzopyran', notNames: ['2,3-dihydro-4H-1-benzopyran'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201i.gif', pin: 'hexahydro-2H,5H-pyrano[2,3-b]pyran' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580201j.gif', pin: '3a,5-dihydro-4H-indene', notNames: ['4,5-dihydro-3aH-indene'] },
]);
