/**
 * P-61.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Structures containing heterocycles
 * Names of heterocyclic rings or ring systems substituted by chains or rings or ring systems are
 * formed in accordance with the seniority order of rings or ring systems over chains (see P-44.1.2.2)
 * and with the seniority order of rings and ring systems (see P-44.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610204a.gif', pin: '2-(3-ethylidene-7-methyloct-6-en-2-yl)pyridine', otherNames: ['2-(2-ethylidene-1,6-dimethylhept-5-en-1-yl)pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610204b.gif', pin: '2,6-di(tetraphen-1-yl)pyridine', otherNames: ['2,6-bis(benzo[a]anthracen-1-yl)pyridine'] },
]);
