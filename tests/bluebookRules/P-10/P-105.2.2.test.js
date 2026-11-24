/**
 * P-105.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group of higher priority than pseudoketone, normal substitutive
 * nomenclature principles are applied.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-105.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105220a.gif', name: '3-[4-(methylamino)-2-oxo-1-β-D-ribofuranosyl-1,2-dihydropyrimidin-5-yl]propanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105220b.gif', name: '2′,3′-dideoxyguanosine-2′,3′-diyl carbonate' },
]);
