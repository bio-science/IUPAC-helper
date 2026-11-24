/**
 * P-66.1.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydroxamic acids
 * Hydroxamic acids have the generic structure R-CO-NH-OH and are named as N-hydroxy amides (see
 * P-65.1.3.4). The suffixes ‘hydroxamic acid’ and ‘carbohydroxamic acid’ but may be used in general
 * nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 845, P-66.1.1.3.2, lines 2/3. [corrected 24 February 2021]
 *     For The suffixes ‘hydroxamic acid’ and ‘carbohydroxamic acid’ are no longer recommended.
 *     read The suffixes ‘hydroxamic acid’ and ‘carbohydroxamic acid’ may be used in general
 *     nomenclature.
 *   Page 845, P-66.1.1.3.2, line 3. [modified 24 March 2021]
 *     For ...acid’ are no longer recommended.
 *     read ...acid’ may be used in general nomenclature.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.3.2', [
  { formula: 'CH3-CH2-CO-NH-OH', pin: 'N-hydroxypropanamide', otherNames: ['propanohydroxamic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113k.gif', pin: 'N-hydroxycyclohexanecarboxamide', otherNames: ['cyclohexanecarbohydroxamic acid'] },
]);
