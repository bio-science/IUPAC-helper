/**
 * P-66.4.2.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefixes for the group –NH-CH=N-NH2 are ‘methanehydrazonamido’ (preferred prefix) and
 * ‘(hydrazinylidenemethyl)amino’ and ‘(methanehydrazonoyl)amino’. The preferred prefix for
 * –N=CH-NH-NH2 is ‘(hydrazinylmethylidene)amino’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 894, P-66.4.2.3.3, lines 2/3. [corrected 1 July 2020]
 *     For ...and ‘(hydrazinylidenemethyl)amino’ and ‘methanehydrazonoylamino’. The preferred...
 *     read ...and ‘(hydrazinylidenemethyl)amino’ and ‘(methanehydrazonoyl)amino’. The preferred...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66423e.gif', pin: '4-[(hydrazinylmethylidene)amino]benzoic acid' },
  { formula: 'H2N-N=CH-NH-CH2-CH2-CN', pin: 'N-(2-cyanoethyl)methanehydrazonamide', notNames: ['3-[(methanehydrazonoyl)amino]propanenitrile'] },
]);
