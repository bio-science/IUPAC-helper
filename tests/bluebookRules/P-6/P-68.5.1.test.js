/**
 * P-68.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nomenclature based on halogen parent hydrides
 * For cyclic and acyclic parent hydrides the lambda convention is used to indicate nonstandard bonding
 * numbers.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.5.1', [
  { formula: 'C6H5-I(OH)2', pin: 'phenyl-λ³-iodanediol' },
  { formula: 'CH3-ICl2', pin: 'dichloro(methyl)-λ³-iodane' },
  { formula: '(CH3-CO-O)2I–', preferredPrefix: 'bis(acetyloxy)-λ³-iodanyl', notNames: ['diacetoxyiodo'] },
  { formula: '(HO)2I–', preselectedName: 'dihydroxy-λ³-iodanyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68510a.gif', pin: '1-methoxy-1λ³,2-benziodoxol-3(1H)-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68510b.gif', pin: '1H-1λ³-chlorole' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68510c.gif', pin: '1λ³-bromirane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68510d.gif', pin: '1H-1λ³-benziodole' },
]);
