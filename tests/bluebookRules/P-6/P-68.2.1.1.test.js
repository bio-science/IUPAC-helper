/**
 * P-68.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mononuclear and acyclic parent hydrides
 * Names of acyclic parent hydrides are formed in accordance with the general rules described in
 * Section P-21. They are preselected names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 985, P-68.2.1.1, example 3. [corrected 28 October 2016]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68211a.gif', preselectedName: 'tridecastannane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68211b.gif', preselectedName: 'trigermaselenane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68211c.gif', preselectedName: 'docosasiloxane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68211d.gif', preselectedName: 'diplumbatellurane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68211e.gif', pin: '2,5,8,11-tetrasiladodecane', otherNames: ['ethylenebis[2-(methylsilyl)ethylsilane]'] },
]);
