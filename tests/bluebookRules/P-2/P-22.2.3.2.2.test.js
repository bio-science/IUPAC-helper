/**
 * P-22.2.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the same kind of heteroatom occurs more than once, the direction of numbering is chosen to
 * give the lower locants to the heteroatoms as a set.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203e.gif', pin: '1,5-dithiacyclododecane', notNames: ['1,9-dithiacyclododecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203f.gif', pin: '1,2,5,8-tetrasilacyclotridecane' },
]);
