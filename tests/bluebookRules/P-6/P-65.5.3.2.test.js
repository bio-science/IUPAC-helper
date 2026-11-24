/**
 * P-65.5.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “As there is no acyl group derived from di- and polycarbonic acids, names for acyl halides derived
 * from these acids are formed by using the name of the acid followed by the name(s) of the halides
 * (see P-67.2.3 for the same methodology applied to inorganic polyacids).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.5.3.2', [
  { formula: 'Cl-CO-O-CO-Cl', pin: 'dicarbonic dichloride' },
  { formula: 'Cl-CO-O-CO-Br', pin: 'dicarbonic bromide chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650503b.gif', pin: '2-imidodicarbonic dichloride' },
  { formula: 'OCN-CO-O-CO-NCO', pin: 'dicarbonic diisocyanate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650503c.gif', pin: '1,2-diimido-4,5-dithiotricarbonic 5-bromide 1-chloride' },
]);
