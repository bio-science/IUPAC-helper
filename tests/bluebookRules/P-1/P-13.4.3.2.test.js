/**
 * P-13.4.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By the prefix ‘nor’
 * The prefix ‘nor’ is used to indicate removal of an unsubstituted saturated skeletal atom from a ring
 * or a chain of a stereoparent structure with its attached hydrogen atom(s). It can also indicate the
 * loss of a –CH= group from a mancude ring from a stereoparent structure (see P-101.3.1) and the loss
 * of a carbon atom from a fullerene structure (see P-27.4.2).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 19, P-13.4.3.2, example 2 on this page. [corrected 3 October 2018]
 *     For 1,9-dinor(C60-Ih)[5,6]fullerene (PIN)
 *     read 1,9-dinor(C60-Ih)[5,6]fullerene (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.4.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304d.gif', name: 'labdane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304e.gif', name: '3-norlabdane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304f.gif', name: 'germacrane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304g.gif', name: '13-norgermacrane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304i.gif', name: '1H-4-normorphinan' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304j.gif', pin: '1,9-dinor(C60-Ih)[5,6]fullerene' },
]);
