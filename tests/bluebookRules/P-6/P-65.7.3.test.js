/**
 * P-65.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Thioanhydrides and other chalcogen analogues
 * Chalcogen analogues of anhydrides having the general structure –CO-X-CO–, –CO-X-CS–, or –CS-X-CS–,
 * where X is –S –, –Se –, or –Te–, are named using the class names ‘thioanhydride’, ‘selenoanhydride’,
 * or ‘telluroanhydride’, respectively.
 * The various unsymmetrical thioanhydrides derived from acetic propanoic anhydride are named as
 * follows.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 828, P-65.7.3, example 3 (return to how printed). [Corrected 8 October 2025]
 *     For bis(4-chlorocyclohexane-1-carbothioic) thioanhydride (PIN)
 *     read 4-chlorocyclohexane-1-carbothioic thioanhydride (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.3', [
  { formula: 'C6H5-CO-S-CO-C6H5', pin: 'benzoic thioanhydride' },
  { formula: 'CH3-CH2-SO2-S-CS-C6H5', pin: 'benzenecarbothioic ethanesulfonic thioanhydride', otherNames: ['ethanesulfonic thiobenzoic thioanhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650703a.gif', pin: '4-chlorocyclohexane-1-carbothioic thioanhydride' },
  { formula: 'CH3-CO-Se-CO-CH3', pin: 'acetic selenoanhydride' },
  { formula: 'CH3-CO-O-CO-CH2-CH3', pin: 'acetic propanoic anhydride', otherNames: ['acetic propionic anhydride'] },
  { formula: 'CH3-CO-O-CS-CH2-CH3', pin: 'acetic propanethioic anhydride', otherNames: ['acetic thiopropionic anhydride'] },
  { formula: 'CH3-CO-S-CO-CH2-CH3', pin: 'acetic propanoic thioanhydride', otherNames: ['acetic propionic thioanhydride'] },
  { formula: 'CH3-CS-O-CO-CH2-CH3', pin: 'ethanethioic propanoic anhydride', otherNames: ['propionic thioacetic anhydride'] },
  { formula: 'CH3-CS-O-CS-CH2-CH3', pin: 'ethanethioic propanethioic anhydride', otherNames: ['thioacetic thiopropionic anhydride'] },
  { formula: 'CH3-CS-S-CS-CH2-CH3', pin: 'ethanethioic propanethioic thioanhydride', otherNames: ['thioacetic thiopropionic thioanhydride'] },
  { formula: 'CH3-CH2-CS-Se-CO-CH3', pin: 'acetic propanethioic selenoanhydride', otherNames: ['acetic thiopropionic selenoanhydride'] },
  { formula: 'CH3-CS-S-CO-CH2-CH3', pin: 'ethanethioic propanoic thioanhydride', otherNames: ['propionic thioacetic thioanhydride'] },
]);
