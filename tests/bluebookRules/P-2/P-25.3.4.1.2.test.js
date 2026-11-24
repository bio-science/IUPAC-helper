/**
 * P-25.3.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Identical attached components
 * A multiplicity of components that are identical and are all fused to a parent component or an
 * attached component is indicated by the use of the prefix ‘di’, ‘tri’, etc. (or ‘bis’, ‘tris’, etc.).
 * The multiplying prefix is not considered in determining the alphabetical order of attached
 * components in names of polycomponent fusion names (see P-25.3.4.2.3). A colon separates the sets of
 * locants, and a comma is used when letters only are present.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304b.gif', pin: 'difuro[3,2-b:2′,3′-e]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304c.gif', pin: '5H-furo[3,2-g]dipyrano[2,3-b:3′,4′,5′-de]quinoline' },
]);
