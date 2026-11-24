/**
 * P-73.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional class names
 * Cationic compounds that can be considered as being derived formally by removal of electrons from the
 * corresponding radical may be named by adding the class name ‘cation’ as a separate word after the
 * name of the radical. Polycations are indicated by adding the multiplying prefixes ‘di’, ‘tri’, etc.,
 * as appropriate, to the class name. Systematic names formed by using the suffix ‘ylium’ are preferred
 * IUPAC names (see P-73.2.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.1', [
  { formula: '⁺CH3', pin: 'methylium', otherNames: ['methyl cation'] },
  { formula: '[C6H5]⁺', pin: 'benzenylium', otherNames: ['phenyl cation', 'phenylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73210a.gif', pin: 'acetylium', otherNames: ['acetyl cation'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73210b.gif', pin: 'ethane-1,2-bis(ylium)', otherNames: ['ethane-1,2-diyl dication'] },
]);
