/**
 * P-22.2.2.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen
 * After the maximum number of noncumulative double bonds has been assigned to the ring structure, any
 * ring atom with a bonding number of three or higher connected to adjacent ring atoms by single bonds
 * only, and carrying one or more hydrogen atoms, is designated by indicated hydrogen (see P-14.7). If
 * there is a choice, such ring atoms are assigned low locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202j.gif', pin: '1H-azepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202k.gif', pin: '1H-phosphole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202l.gif', pin: '2H-1,3-dioxole' },
]);
