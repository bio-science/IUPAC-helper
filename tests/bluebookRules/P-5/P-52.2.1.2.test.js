/**
 * P-52.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The name [n]annulene is used in preferred IUPAC names as a parent component in fusion nomenclature
 * (see P-25.3.2.1.1) and may be used in general nomenclature as the name for the monocycle itself.
 * Preferred IUPAC names for cycloalkenes and cycloalkapolyenes are generated from the corresponding
 * cycloalkane names (see P-31.1.3.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520201a.gif', pin: 'benzene', notNames: ['[6]annulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520201b.gif', pin: 'cyclohepta-1,3,5-triene', otherNames: ['1H-[7]annulene (preferred IUPAC name'] },
]);
