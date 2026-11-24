/**
 * P-13.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “With the name of a neutral parent structure”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 15, P-13.3.3.1, example 2. [corrected 21 August 2019]
 *     For 2-phenyloxirane
 *     read phenyloxirane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.3.3.1', [
  { formula: 'CH3-C≡N', pin: 'acetonitrile' },
  { formula: 'CH3-C≡NO', pin: 'acetonitrile oxide' },
  { pin: 'ethenylbenzene', otherNames: ['styrene'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303j.gif', pin: 'phenyloxirane', otherNames: ['styrene oxide'] },
]);
