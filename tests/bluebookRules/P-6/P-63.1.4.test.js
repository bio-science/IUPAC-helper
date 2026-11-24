/**
 * P-63.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, prefix mode
 * Hydroxy groups are indicated by the prefix ‘hydroxy’ when:
 * (1) a group having priority for citation as the principal characteristic group is present; or
 * (2) a hydroxy group cannot be denoted by a suffix.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630104a.gif', pin: '6-hydroxyheptan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630104b.gif', pin: '3-(hydroxymethyl)hexane-1,6-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630104c.gif', pin: '3-(1-hydroxycyclohexyl)propane-1,2-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630104d.gif', pin: '1-hydroxypiperidine-3-carbonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630104e.gif', pin: '3-(hydroxyphosphanyl)propanoic acid' },
]);
