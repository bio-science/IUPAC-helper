/**
 * P-65.3.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydroximic and hydroxamic acids derived from sulfonic, sulfinic, etc. acids
 * Hydroximic acids and hydroxamic acids derived from sulfonic, sulfinic, etc. acids are named as
 * N-hydroxysulfonimidic acids and N-hydroxysulfonamides, etc. (see P-66.1.1.3.2), respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650301g.gif', pin: 'N-hydroxymethanesulfonimidic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650301h.gif', pin: 'N-hydroxypropane-1-sulfinamide' },
]);
