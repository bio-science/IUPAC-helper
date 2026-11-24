/**
 * P-107.4.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Neutral glycosphingolipids
 * A neutral glycosphingolipid is a carbohydrate-containing derivative of a sphingoid or ceramide. It
 * is understood that the carbohydrate residue is attached by a glycosidic linkage to 1-O-. Preferred
 * systematic names must include all locants.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.4.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107433a.gif', name: 'N-[(2S,3R,4E,14E)-1-(β-D-galactopyranosyloxy)-3-hydroxyoctadeca-4,14-dien-2-yl]hexadecanamide' },
]);
