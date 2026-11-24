/**
 * P-25.7.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Localized double bonds
 * If it is necessary to identify isomers that differ only by virtue of the location of localized
 * double bonds, this differentiation is indicated by the use of the Greek letter Δ. The locant cited
 * corresponds to the first cited locant of the localized double bond.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.7.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701h.gif', pin: '1,6-dimethyl-Δ¹-heptalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701i.gif', pin: '1,6-dimethyl-Δ¹⁽¹⁰ᵃ⁾-heptalene' },
]);
