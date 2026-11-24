/**
 * P-65.2.3.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Replacement by halides and pseudohalides
 * Prefixes bromo for –Br, chloro for –Cl, fluoro for –F, iodo for –I , azido for –N3, isocyano for
 * –NC, and isocyanato for –NCO (and chalcogen analogues) are used to indicate functional replacement.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 787, P-65.2.3.1.3, example 2. [modified 31 October 2018]
 *     For 1-isocyanato-2-imidodicarbonic acid
 *     read 2-imido-1-isocyanatodicarbonic acid
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.3.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203q.gif', pin: 'chlorodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203r.gif', name: '2-imido-1-isocyanatodicarbonic acid' },
]);
