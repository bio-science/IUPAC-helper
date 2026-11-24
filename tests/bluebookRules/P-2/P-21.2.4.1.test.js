/**
 * P-21.2.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteroatoms with nonstandard bonding numbers are denoted by the λn symbol which is placed after
 * each appropriate locant (see P-14.1). Low numbering is first given to the heteroatoms in the usual
 * manner without regard to nonstandard bonding numbers. When there is a choice, lower locants are
 * given to a higher nonstandard bonding number.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.2.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210204a.gif', preselectedName: '2λ⁴-trisulfane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210204b.gif', preselectedName: '1λ⁶-trisulfane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210204c.gif', preselectedName: '1λ⁵,2λ⁵,3λ⁵-triphosphane', notNames: ['tri-λ⁵-phosphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210204d.gif', preselectedName: '1λ⁵,3λ⁵-diphosphoxane' },
]);
