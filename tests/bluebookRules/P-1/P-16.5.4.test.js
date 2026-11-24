/**
 * P-16.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiple types of enclosing marks
 * When multiple types of enclosing marks are required, the nesting order is as follows: {[({[( )]})]},
 * etc. as illustrated in Fig.1.3. It must be noted, however, that the presence of square brackets
 * and/or parentheses that are an integral part of the name of a parent structure does not affect the
 * nesting order given here.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 120, P-16.5.4, example on this page. [corrected 28 October 2016]
 *     For [N-(carboxymethyl)-N′-(2-hydroxyethyl)-N,N′-ethane-1,2-diyldiglycine
 *     read N-(carboxymethyl)-N′-(2-hydroxyethyl)-N,N′-(ethane-1,2-diyl)diglycine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605u.gif', name: '2,2′-({2-[(carboxymethyl)(2-hydroxyethyl)amino]ethyl}azanediyl)diacetic acid' },
]);
