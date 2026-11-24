/**
 * P-65.6.3.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lactides are cyclic esters derived by multiple esterification between two (or more) molecules of a
 * hydroxy acid; they are named as heterocyclic compounds.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603cb.gif', pin: '1,4-dioxane-2,5-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603cc.gif', pin: '6H,12H,18H-tribenzo[b,f,j][1,5,9]trioxacyclododecine-6,12,18-trione', notNames: ['trisalicylide'] },
]);
