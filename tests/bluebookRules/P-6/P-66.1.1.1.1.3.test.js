/**
 * P-66.1.1.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘carboxamide’ is always used to name amides with the –CO-NH2 group attached to a ring,
 * ring system, or to a heteroacyclic parent.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.1.3', [
  { formula: 'H2P-CO-NH2', pin: 'phosphanecarboxamide' },
  { formula: 'H2N-NH-CO-NH2', pin: 'hydrazinecarboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111b.gif', pin: 'thiophene-2-carboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111c.gif', pin: 'piperidine-1-carboxamide' },
]);
