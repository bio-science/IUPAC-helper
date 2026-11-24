/**
 * P-66.5.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘carbonitrile’ is always used to name nitriles having the –CN group attached to a ring
 * or ring system or to an acyclic heteroatom.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.1.3', [
  { formula: 'H3Si-CN', pin: 'silanecarbonitrile', otherNames: ['silyl cyanide'] },
  { formula: 'H2N-NH-CN', pin: 'cyanohydrazide', otherNames: ['hydrazinecarbonitrile', 'hydrazinyl cyanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511d.gif', pin: 'cyclohexanecarbonitrile', otherNames: ['cyclohexyl cyanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66511e.gif', pin: 'piperidine-1-carbonitrile' },
]);
