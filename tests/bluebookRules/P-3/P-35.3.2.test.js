/**
 * P-35.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of compound prefixes derived from suffixes or functional parent compounds may be formed by
 * the additive operation called concatenation. This is used to assemble simple mono-, di-, tri-, and
 * tetravalent prefixes. Hydrocarbyl divalent substituents can be attached to prefixes expressing
 * characteristic groups. This method is used when no hydrogen atoms are present for substitution (see
 * P-15.1); it is also used to form substituent groups in multiplicative nomenclature (see
 * P-15.3.1.2.2)”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 426, P-35.3.2, example 5. [corrected 31 October 2018]
 *     For hydroxy(hydrazinylidene)methyl
 *     read hydrazinylidene(hydroxy)methyl
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-35.3.2', [
  { preferredPrefix: 'pentyloxy' },
  { preferredPrefix: 'benzyloxy' },
  { preferredPrefix: 'carbonochloridoyl' },
  { preferredPrefix: 'C-hydroxycarbonimidoyl' },
  { preferredPrefix: 'C-hydroxycarbonohydrazonoyl' },
  { preferredPrefix: 'ethane-1,2-diylbis(oxy)' },
  { preferredPrefix: 'methylenedinitrilo' },
  { preferredPrefix: 'methylenebis(phosphorothioyl)' },
]);
