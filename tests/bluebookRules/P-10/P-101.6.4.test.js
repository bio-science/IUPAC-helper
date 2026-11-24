/**
 * P-101.6.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Saturation of double bonds in a parent structure whose name implies the presence of isolated double
 * bonds and/or systems of conjugated double bonds is described by the prefix ‘hydro’, itself preceded
 * by the locants of the saturated positions. The ‘hydro’ prefix is detachable and always cited
 * immediately in front of the fundamental parent structure (see P-31.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.6.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101640a.gif', name: 'formosanan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101640b.gif', name: '16,17-dihydroformosanan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101640c.gif', name: 'β,χ-carotene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101640d.gif', name: '5,6,7,8,1′,2′,3′,4′,5′,6′,7′,8′-dodecahydro-β,χ-carotene' },
]);
