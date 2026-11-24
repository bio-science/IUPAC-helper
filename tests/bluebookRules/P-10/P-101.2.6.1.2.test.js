/**
 * P-101.2.6.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Configurational inversion at one of stereogenic centers whose configuration is implied or stated in
 * the name of the fundamental parent structure can be indicated by the italicized prefix ‘epi’
 * (derived from ‘epimer’) placed at the front of the name of the parent structure and prefixed by the
 * locant of the affected atom.
 * The name 13β-abietane, described above in P-101.2.6.1.1, can also be named 13-epi-abietane.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1300, P-101.2.6.1.2, example. [corrected 17 October 2018]
 *     Replace the structures with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.2.6.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101261e.gif', name: 'eburnamenine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101261f.gif', name: '3-epi-eburnamenine' },
]);
