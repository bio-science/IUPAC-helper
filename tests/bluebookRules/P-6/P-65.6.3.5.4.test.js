/**
 * P-65.6.3.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Other cyclic esters derived from different hydroxy acids or from polybasic acids and polyhydroxy
 * compounds are named as heterocycles.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 825, P-65.6.3.5.4, example 3. [corrected 24 June 2020]
 *     For (not 3,4-dihydrobenzo[f]dioxocine-1,6-dione)
 *     read (not 3,4-dihydrobenzo[f][1,4]dioxocine-1,6-dione)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603cd.gif', pin: '1,3-dioxan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ce.gif', pin: '1,3,2λ⁵-dioxaphosphepan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603cf.gif', pin: '3,4-dihydro-2,5-benzodioxocine-1,6-dione', notNames: ['3,4-dihydrobenzo[f][1,4]dioxocine-1,6-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603cg.gif', pin: 'octahydro[1,4]dioxocino[2,3-c][1,6]dioxecine-2,5,9,12-tetrone' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ch.gif', pin: 'octahydro[1,5]dioxonino[3,2-b][1,5]dioxonine-2,5,9,12-tetrone' },
]);
