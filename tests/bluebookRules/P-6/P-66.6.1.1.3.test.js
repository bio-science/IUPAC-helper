/**
 * P-66.6.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘carbaldehyde’ is used when the –CHO group is attached to a carbon atom of a ring or
 * ring system, or to a heteroatom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.1.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66611b.gif', pin: 'cyclohexanecarbaldehyde' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66611c.gif', pin: 'pyridine-2,6-dicarbaldehyde' },
  { formula: 'H2P-CHO', pin: 'phosphanecarbaldehyde' },
  { formula: 'H2NNH-CHO', pin: 'formohydrazide', otherNames: ['hydrazinecarbaldehyde'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66611d.gif', pin: '1,4,4-trimethyltetraaz-2-ene-1-carbaldehyde' },
]);
