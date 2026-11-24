/**
 * P-106.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives of nucleotides having retained names are named in the same manner as the corresponding
 * nucleoside, i.e., they can be fully substituted on the purine or pyrimidine ring and the
 * ribofuranosyl component may be modified as prescribed for carbohydrates (see P-102.5). The 2- and
 * 3-deoxy modifications of the ribose component are also used.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-106.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106310a.gif', name: '2′,3′-O-[(1S,2E)-3-phenylprop-2-ene-1,1-diyl]-5′-adenylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106310b.gif', name: 'N⁶-(propylcarbamoyl)-5′-adenylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106310c.gif', name: '5′-O-acetyl-2′-deoxyguanosine 3′-(trihydrogen diphosphate)' },
]);
