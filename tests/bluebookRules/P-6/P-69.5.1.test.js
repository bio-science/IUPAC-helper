/**
 * P-69.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds having two identical or different metal atoms belonging to the first class are named
 * additively using the methodology described in Section IR-9.2.5 of ref. 12, and the order of
 * seniority of the Element Sequence Table beginning at Zn, i.e. Zn > Cd > Hg >.....Li > Na > K > Rb >
 * Cs > Fr (see Table VI, ref. 12).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69510a.gif', name: '1-[4-(dimethylarsanyl)pyridin-3-yl]-2-hydroxido-μ-thiophene-2,5-diyl-dimercury' },
]);
