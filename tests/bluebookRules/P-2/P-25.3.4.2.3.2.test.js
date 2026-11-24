/**
 * P-25.3.4.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If two or more identical components are fused to a third component, they are cited together using
 * multiplying prefixes (‘di’, ‘tri’, etc.; or ‘bis’, ‘tris’, etc.). The citation of different
 * components is in alphabetical order of the names of the components, just as for simple
 * multiplicative prefixes in substitutive nomenclature. The multiplicative prefix is considered only
 * when it is an integral part of a multipart fusion prefix.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.2.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304r.gif', pin: 'difuro[3,2-b:3′,4′-e]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304s.gif', pin: '5H-furo[3,2-g]dipyrano[2,3-b:3′,4′,5′-de]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304t.gif', pin: '1H-cyclopropa[b]dicyclopenta[2,3:6,7]oxepino[4,5-e]pyridine', notNames: ['1H-dicyclopenta[2,3:6,7]oxepino[4,5-b]cyclopropa[e]pyridine'] },
]);
