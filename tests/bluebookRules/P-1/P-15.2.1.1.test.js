/**
 * P-15.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional class names are formed by expressing the functional class name of the compound as one
 * word and the remainder of the molecule as a monovalent group name cited as a separate word, placed
 * in front of the class name. Preferred IUPAC functional class names are restricted to esters
 * (P-65.6.3.2), acyl halides (P-65.5.1), and pseudohalides (see P-65.5.2). Alkyl glycosides receive
 * also functional class names that are classified as approved names in carbohydrate nomenclature (see
 * P-102.5.6.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.2.1.1', [
  { formula: 'CH3-CH2-CO-O-CH3', pin: 'methyl propanoate' },
  { formula: 'CH3-CO-Cl', pin: 'acetyl chloride' },
  { formula: 'C6H5-CO-CN', pin: 'benzoyl cyanide' },
  { formula: 'C6H5-CH2-NCS', name: 'benzyl isothiocyanate' },
  { formula: 'C6H5-NC', pin: 'isocyanobenzene', otherNames: ['phenyl isocyanide'] },
  { formula: 'CH3-OH', pin: 'methanol', otherNames: ['methyl alcohol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1502a.gif', pin: 'azidobenzene', otherNames: ['phenyl azide'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1502b.gif', name: 'methyl α-D-gulofuranoside' },
]);
