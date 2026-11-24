/**
 * P-66.1.1.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups R-CO-N< and R-CO-N= , or R-SO2-N< and R-SO2-N= (and selenium and tellurium
 * analogues)
 * When a group having preference for citation as a principal characteristic group is present, the
 * groups R-CO-N< and R-CO-N=, or R-SO2-N< and R-SO2-N= (and selenium and tellurium analogues) of an
 * N-substituted amide are named by combining acyl group names with those of the appropriate nitrogen
 * substituent groups, azanediyl and imino, respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114x.gif', pin: '4,4′-(acetylazanediyl)dibenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114y.gif', pin: 'methyl 4-[(methanesulfonyl)imino]cyclohexane-1-carboxylate' },
]);
