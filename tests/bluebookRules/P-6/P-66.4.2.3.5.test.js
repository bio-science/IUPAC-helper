/**
 * P-66.4.2.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a group having preference for citation as a principal characteristic group is present, the
 * groups R-C(=N-NH2)-NH– and R-S(O)(=N-NH2)-NH– (and the selenium and tellurium analogues) are named
 * in two ways:
 * (1) substitutively, by using a prefix formed by changing the final letter ‘e’ in the complete name
 * of the amide to ‘o’;
 * (2) substitutively, by using ‘acylamino’ prefixes formed by substituting the name of the acyl group
 * to the substituent ‘amino’
 * Method (1) generates preferred prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.3.5', [
  { formula: 'CH3-C(=N-NH2)-NH-CH2-CH2-COOH', pin: '3-(ethanehydrazonamido)propanoic acid', otherNames: ['3-[(ethanehydrazonoyl)amino]propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423g.gif', pin: '4-(benzenesulfinohydrazonamido)benzoic acid', otherNames: ['4-[(benzenesulfinohydrazonoyl)amino]benzoic acid'] },
]);
