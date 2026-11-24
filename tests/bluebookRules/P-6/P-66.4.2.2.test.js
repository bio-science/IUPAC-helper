/**
 * P-66.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amidrazones of carbonic acid and di- and polycarbonic acids
 * The general methodology discussed in P-65.2 is applied to generate the names for amidrazones derived
 * from carbonic, di-, and polycarbonic acids.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66422a.gif', pin: 'hydrazinecarboximidohydrazide', otherNames: ['carbonimidic dihydrazide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66422b.gif', pin: 'carbonohydrazonic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66422c.gif', pin: 'dicarbonimidic dihydrazide', notNames: ['1,3-diimidodicarbonic dihydrazide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66422d.gif', pin: 'dicarbonohydrazonic diamide', notNames: ['1,3-dihydrazonodicarbonic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66422e.gif', notNames: ['[(hydrazinecarboximidoyl)oxy]formohydrazonamide'] },
]);
