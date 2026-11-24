/**
 * P-25.3.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Identical components with identical fusion locants.
 * Two or more groups of identical components (including identical fusion locants between these
 * components) fused to another component, are indicated by the use of the multiplying prefixes ‘bis’,
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306i.gif', pin: 'bis(pyrimido[5′,4′:4,5]pyrrolo)[2,3-c:3′,2′-e]pyridazine' },
]);
