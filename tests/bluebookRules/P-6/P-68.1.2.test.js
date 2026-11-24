/**
 * P-68.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of substituent groups derived from parent hydrides
 * Names of substituent groups –BH2 and =BH derived from borane are formed by method (2) described in
 * P-29.2; they are preselected prefixes.
 * Prefixes derived from borane are no longer named by method (1) in P-29.2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 970, P-68.1.2, example 15. [corrected 20 March 2019]
 *     For [1,3,2]diazaborino[1,2-a][1,3,2]diazaborin-2-yl
 *     read [1,3,2]diazaborinino[1,2-a][1,3,2]diazaborinin-2-yl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.2', [
  { formula: '–BH2', preselectedPrefix: 'boranyl', notNames: ['boryl'] },
  { formula: '=BH', preselectedPrefix: 'boranylidene', notNames: ['borylidene'] },
  { formula: '>BH', preselectedPrefix: 'boranediyl', notNames: ['borylidene', 'borylene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68120a.gif', preselectedPrefix: 'boranetriyl', notNames: ['borylidyne'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68120b.gif', preselectedPrefix: '2-boranyltriborane(5)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68120c.gif', preselectedPrefix: 'triboran(5)-1-yl' },
  { formula: '–BH-O-BH2', preselectedPrefix: 'diboroxanyl' },
  { formula: '–BH-NH-BH2', notNames: ['diborazan-1-yl'] },
  { formula: 'H2Al–', name: 'alumanyl' },
  { formula: 'H2Ga–', name: 'gallanyl' },
  { formula: 'H2In–', name: 'indiganyl' },
  { formula: 'H2Tl–', name: 'thallanyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68120d.gif', preferredPrefix: '2,4,6-trisila-8-boranonan-9-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68120e.gif', preferredPrefix: '1,3,2-dioxaboretan-2-yl' },
]);
