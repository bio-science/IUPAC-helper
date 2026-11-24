/**
 * P-15.6.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names are formed by juxtaposition of component names. The name of the cyclic component is cited
 * first followed by the systematic or retained name of the component to which the principal
 * characteristic group is attached.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506a.gif', pin: 'cyclohexylmethanol', otherNames: ['cyclohexanemethanol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506b.gif', pin: 'phenylacetic acid', otherNames: ['benzeneacetic acid'] },
]);
