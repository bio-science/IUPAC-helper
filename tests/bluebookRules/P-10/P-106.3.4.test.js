/**
 * P-106.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Oligonucleotides are named using the prefix names derived from the traditional names for the
 * nucleotides.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-106.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106340a.gif', name: '2′-deoxyguanylyl-(3′→5′)-2′-deoxyuridylyl-(3′→5′)-2′-deoxyguanosine' },
]);
