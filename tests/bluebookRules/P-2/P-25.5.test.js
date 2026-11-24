/**
 * P-25.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “LIMITATIONS OF FUSION NOMENCLATURE: THREE COMPONENTS ORTHO- AND PERI-FUSED TOGETHER
 * The fusion principles described in P-25.1 through P-25.3 apply only between pairs of components. It
 * is not possible by these principles to name a system in which a third component is ortho- and
 * peri-fused to two components that are themselves ortho- or ortho- and peri-fused together. It is
 * important to recall that benzo heterocycles are considered as one component, thus permitting the
 * construction of names that would not otherwise be possible.
 * When a third component is ortho- and peri-fused to two components that are themselves ortho- or
 * ortho- and peri-fused together, the following procedures are applied in order until a name can be …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250500a.gif', pin: '2H-[1,3]benzodioxino[6′,5′,4′:10,5,6]anthra[2,3-b]azepine' },
]);
