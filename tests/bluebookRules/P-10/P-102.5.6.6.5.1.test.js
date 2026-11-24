/**
 * P-102.5.6.6.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of aldaric acids are formed by changing the ‘ose’ ending in retained or systematic names of
 * parent aldoses to ‘aric acid’. Choice of a parent structure is made in accordance with P-102.4 and
 * P-102.5.6.5.1. The stereodescriptor ‘meso’ may be added for sake of clarity to the names of the
 * appropriate aldaric acids.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1381, P-102.5.6.6.5.1, line 3/4. [corrected 18 May 2023]
 *     For ...The descriptor ‘meso&#146 must be added for sake of clarity...
 *     read ...The descriptor ‘meso&#146 may be added for the sake of clarity...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566u.gif', name: 'L-altraric acid', notNames: ['L-talaric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566v.gif', name: 'meso-xylaric acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566w.gif', name: '4-O-methyl-D-xylaric acid', notNames: ['2-O-methyl-L-xylaric acid'] },
]);
