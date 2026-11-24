/**
 * P-25.3.4.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fusion between two attached components is indicated by the method described in P-25.3.2. All
 * attached components are cited in front of the parent component. Each second-order attached component
 * is cited in front of the first-order attached component to which it is fused, and so on to higher
 * order attached components. If there are two or more different components, or sets of components,
 * attached to a lower order component, they are cited in alphabetical order.
 * Note: In the case of the indacenes, if the only distinction is between as-indacene and s-indacene,
 * then the italic characters are considered. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304o.gif', pin: 'furo[3,2-b]thieno[2,3-e]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304p.gif', pin: 'furo[2′,3′:4,5]pyrrolo[2,3-b]imidazo[4,5-e]pyrazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304q.gif', pin: 'as-indaceno[2,3-b]-s-indaceno[1,2-e]pyridine' },
]);
