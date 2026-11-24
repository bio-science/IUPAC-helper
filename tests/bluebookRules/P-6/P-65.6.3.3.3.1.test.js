/**
 * P-65.6.3.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When anions are identical functional class multiplicative nomenclature is used. Names are formed by
 * citing the multivalent group, the multiplicative prefix, and the multiplied anionic component name.
 * Multiplicative prefixes ‘di’, ‘tri’, etc. are used when anions are unsubstituted; when substituted,
 * prefixes ‘bis’, ‘tris’, etc. are used.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603aa.gif', pin: 'ethane-1,2-diyl diacetate' },
  { formula: 'ClCH2-CO-O-CH2-CH2-CH2-O-CO-CH2Cl', pin: 'propane-1,3-diyl bis(chloroacetate)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ab.gif', pin: 'propane-1,2,3-triyl triacetate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ac.gif', pin: '1,2-phenylenedi(propan-3,1-yl) diacetate' },
]);
