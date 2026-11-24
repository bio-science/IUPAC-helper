/**
 * P-67.1.2.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names of amides and hydrazides of the boron acids and silicic acid are substitutive
 * names based on the preselected parent hydride names borane and silane.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.6.2', [
  { formula: 'H2B-NH2', name: 'boranamine', notNames: ['borinic amide'] },
  { formula: 'B(NH2)3', name: 'boranetriamine', notNames: ['boric triamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126i.gif', name: '1,1′,1′′-boranetriyltrihydrazine', notNames: ['boric trihydrazide'] },
  { formula: 'Si(NH2)4', name: 'silanetetramine', notNames: ['silicic tetramide'] },
  { formula: 'Si(NH-NH2)4', name: '1,1′,1′′,1′′′-silanetetrayltetrahydrazine', notNames: ['silicic tetrahydrazide'] },
]);
