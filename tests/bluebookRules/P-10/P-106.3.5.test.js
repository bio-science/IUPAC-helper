/**
 * P-106.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a phosphorothioic acid is used (HS-P in place of HO-P), the prefix P-thio is added at the
 * front of the name of the nucleotide.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-106.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106350a.gif', name: '2′-deoxy-P-thioguanylyl-(3′→5′)-2′-deoxy-P-thiouridylyl-(3′→5′)-2′-deoxyguanosine' },
]);
