/**
 * P-25.3.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Interior heteroatoms that are not identified by skeletal replacement (‘a’) nomenclature are
 * numbered after the peripheral atoms continuing the established number sequence [see also
 * P-25.3.3.1.2 (e)]. Compare the numbering of interior carbon atoms (see P-25.3.3.3).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250303w.gif', pin: '1H-[1,4]oxazino[3,4,5-cd]pyrrolizine' },
]);
