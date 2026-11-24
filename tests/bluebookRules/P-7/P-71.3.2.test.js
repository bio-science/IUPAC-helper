/**
 * P-71.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A radical derived formally by the removal of hydrogen atoms from an amine, imine, or amide
 * characteristic group is named by adding the appropriate cumulative suffix ‘-yl’ or ‘-ylidene’ to the
 * basic suffix as shown here. This method is preferred to that using parent such as ‘azanyl’, and
 * ‘nitrene’, or the functional modifier ‘imidyl’ in functional class nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.3.2', [
  { suffix: 'amine' },
  { suffix: 'aminyl' },
  { suffix: 'aminylidene' },
  { suffix: 'imine' },
  { suffix: 'iminyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71320d.gif', pin: 'methanaminyl', otherNames: ['methylazanyl', 'methylaminyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71320e.gif', pin: 'propan-1-iminyl', otherNames: ['propylideneazanyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71320f.gif', pin: 'benzenaminyl', otherNames: ['phenylaminyl', 'phenylazanyl'], notNames: ['anilino'] },
  { formula: '(CH3)3P=N•', pin: 'trimethyl-λ⁵-phosphaniminyl', otherNames: ['trimethylphosphane imidyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71320g.gif', pin: 'formamidyl', otherNames: ['formylazanyl', 'formylaminyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71320h.gif', pin: 'N′-(methylsulfanyl)-N-(phenylsulfanyl)benzenecarboximidamidyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71320i.gif', pin: 'pyridine-2-carboxamidyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71320j.gif', pin: '2,5-dioxopyrrolidin-1-yl', otherNames: ['succinimidyl'] },
  { formula: 'C6H5-N²•', pin: 'benzenaminylidene', otherNames: ['phenylnitrene', 'phenylaminylene'] },
  { formula: 'CH3-CO-N²•', pin: 'acetamidylidene', otherNames: ['acetylnitrene', 'acetylaminylene'] },
]);
