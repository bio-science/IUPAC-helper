/**
 * P-68.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds with three or more contiguous identical chalcogen atoms are treated as parent hydrides in
 * substitutive nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.1.1', [
  { formula: 'HO-O-OH', preselectedName: 'trioxidane' },
  { formula: 'CH3-S-S-SH', pin: 'methyltrisulfane' },
  { formula: 'CH3-O-O-O-CH3', pin: 'dimethyltrioxidane', otherNames: ['dimethyl trioxide'] },
  { formula: 'CH3-S-S-S-CH3', pin: 'dimethyltrisulfane', otherNames: ['dimethyl trisulfide'] },
  { formula: 'C6H5-Se-Se-Se-CH3', pin: 'methyl(phenyl)triselane', otherNames: ['methyl phenyl triselenide'] },
  { formula: 'C6H5-Se-Se-Se-C6H5', pin: 'diphenyltriselane', otherNames: ['diphenyl triselenide'], notNames: ['triselanediyldibenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68411a.gif', preselectedName: 'tritellanedisulfonic acid', otherNames: ['tritelluropentathionic acid'] },
  { formula: 'HO-SO2-S-S-S-SO2-OH', preselectedName: 'trisulfanedisulfonic acid', otherNames: ['pentathionic acid'] },
  { formula: 'CH3-SeSeSe-O-SH', pin: 'methyltriselane-OS-thioperoxol', otherNames: ['O-(methyltriselanyl) thiohydroperoxide'] },
  { formula: 'H-TeTeTe-SeSe-H', preselectedName: 'tritellane(diselenoperoxol)', otherNames: ['tritelluryl diselenohydroperoxide'] },
  { formula: 'C6H5-SSS-OH', pin: 'phenyltrisulfanol' },
  { formula: 'CH3-TeTeTeTe-SH', pin: 'methyltetratellanethiol' },
]);
