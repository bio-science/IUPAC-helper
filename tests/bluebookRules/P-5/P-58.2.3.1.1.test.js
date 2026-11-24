/**
 * P-58.2.3.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When there are an equal number of indicated hydrogen atoms and principal characteristic groups or
 * free valences to be accommodated, the indicated hydrogen atoms are placed at peripheral atoms that
 * will accommodate these principal characteristic groups or free valences. Locants for hydro prefixes
 * are those of the saturated positions.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 620, P-58.2.3.1.1, example 1. [corrected 21 November 2018]
 *     For tetrahydro-4H-pyran-4-one (PIN)
 *     read tetrahydro-4H-pyran-4-one
 *     add oxan-4-one (PIN)
 *   Page 620, P-58.2.3.1.1, example 2. [corrected 20 February 2019]
 *     For 2-(1,3,4,5-tetrahydro-2H-2-benzazepin-2-yl)ethanol (PIN)
 *     read 2-(1,3,4,5-tetrahydro-2H-2-benzazepin-2-yl)ethan-1-ol (PIN)
 *   Page 621, P-58.2.3.1.1, example 1 on this page. [corrected 19 September 2018]
 *     For 1,2,3,4,4a,5,7,11b-octahydro-6H-dibenzo[a,c]cycloheptene-6,6-dicarboxylic acid (PIN)
 *     read 1,2,3,4,4a,5,7,11b-octahydro-6H-dibenzo[a,c][7]annulene-6,6-dicarboxylic acid (PIN)
 *     add [not 1,2,3,4,4a,5,7,11b-octahydro-6H-dibenzo[a,c]cycloheptene-6,6-dicarboxylic acid]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.3.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203a.gif', pin: 'oxan-4-one', otherNames: ['tetrahydro-4H-pyran-4-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203b.gif', pin: '2-(1,3,4,5-tetrahydro-2H-2-benzazepin-2-yl)ethan-1-ol', otherNames: ['1,3,4,5-tetrahydro-2H-2-benzazepine-2-ethanol'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203c.gif', pin: '7H-1-benzopyran-7-one' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203d.gif', pin: '1,4-dihydro-3aH-indene-3a-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203e.gif', pin: '2H,7H-pyrano[2,3-b]pyran-2,7-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203f.gif', pin: '1,2,3,4,4a,5,7,11b-octahydro-6H-dibenzo[a,c][7]annulene-6,6-dicarboxylic acid', notNames: ['1,2,3,4,4a,5,7,11b-octahydro-6H-dibenzo[a,c]cycloheptene-6,6-dicarboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203g.gif', pin: '2,3,7,8-tetrahydro-4H,6H-benzo[1,2-b:5,4-b′]dipyran-4,6-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203h.gif', pin: '1,3b,4,5,6,6a,7,7a-octahydro-3aH-cyclopenta[a]pentalene-3a,4-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580203i.gif', pin: '1,2,3,7,8,8a-hexahydro-4H-3a,7-methanoazulene-4,9-dione' },
]);
