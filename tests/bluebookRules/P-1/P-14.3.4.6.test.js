/**
 * P-14.3.4.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “All locants are omitted for parent compounds when all substitutable hydrogen atoms have the same
 * locant.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 33, P-14.3.4.6, example 2. [modified 16 June 2021]
 *     For (not 4-chorotrioxetane)
 *     read (not 4-chloro-1,2,3-trioxetane)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.3.4.6', [
  { formula: 'F2CH-COOH', pin: 'difluoroacetic acid', notNames: ['2,2-difluoroacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403o.gif', pin: 'chlorotrioxetane', notNames: ['4-chloro-1,2,3-trioxetane'] },
]);
