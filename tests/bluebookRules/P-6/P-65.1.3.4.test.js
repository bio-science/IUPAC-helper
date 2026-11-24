/**
 * P-65.1.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydroxamic acids have the generic structure R-CO-NH-OH and are named as N-hydroxy amides (see
 * P-66.1.1.3.2). The suffixes ‘hydroxamic acid’ and ‘carbohydroxamic acid’ are no longer recommended
 * for preferred IUPAC names but may be used in general nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 760, P-65.1.3.4, example 1. [deleted 24 March 2021]
 *     Delete this correction.
 *   Page 760, P-65.1.3.4, example 2. [deleted 24 March 2021]
 *     Delete this correction.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103w.gif', pin: 'N-hydroxyacetamide', otherNames: ['acetohydroxamic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103x.gif', pin: 'N-hydroxycyclohexanecarboxamide', otherNames: ['cyclohexanecarbohydroxamic acid'] },
]);
