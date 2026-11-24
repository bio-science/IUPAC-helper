/**
 * P-68.3.1.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Azines are symmetrical derivatives of hydrazine. When this condition is not fulfilled, compounds
 * having the structures R-CH=N-N=CH-R′ or RRC=N-N=CR′R′, are named in two ways:
 * (1) as unsymmetrical derivatives of hydrazine;
 * (2) as ‘ylidenehydrazones’ of the preferred ketone or aldehyde.
 * Method (1) generates preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312h.gif', name: 'cyclohexylidene(1-methylpropylidene)hydrazine' },
]);
