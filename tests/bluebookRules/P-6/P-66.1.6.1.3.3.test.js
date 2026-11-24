/**
 * P-66.1.6.1.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes for substituents derived from chalcogen analogues of urea and isourea are as follows:”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.3.3', [
  { preferredPrefix: 'carbamothioylamino' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161w.gif', pin: '3-(carbamothioylamino)propanoic acid', otherNames: ['3-{[amino(sulfanylidene)methyl]amino}propanoic acid'] },
]);
