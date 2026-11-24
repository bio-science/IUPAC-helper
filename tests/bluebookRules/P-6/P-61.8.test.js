/**
 * P-61.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ISOCYANATES
 * This is a change from previous recommendations. Preferred IUPAC names are generated substitutively
 * using the prefix ‘isocyanato’ attached directly to a parent hydride. Previously, functional class
 * names were recommended for this class.
 * Compounds containing the –N=C=O group attached to a parent hydride structure, are named by using
 * substitutive nomenclature and the prefix ‘isocyanato’. …
 * Note: In accordance with the seniority order of classes, the isocyanato group and its chalcogen
 * analogues form acid pseudohalides when attached to the central atom P, As, Sb of inorganic acids
 * (see …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.8', [
  { formula: 'C6H11-NCO', pin: 'isocyanatocyclohexane', otherNames: ['cyclohexyl isocyanate'] },
  { formula: 'C6H5-NCS', pin: 'isothiocyanatobenzene', otherNames: ['phenyl isothiocyanate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610800a.gif', pin: '4-isocyanatobenzene-1-sulfonyl chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610800b.gif', pin: '5-isocyanato-1-(isocyanatomethyl)-1,3,3-trimethylcyclohexane', otherNames: ['3-(isocyanatomethyl)-3,5,5-trimethylcyclohexyl isocyanate'] },
  { formula: 'H3Si-NCS', pin: 'isothiocyanatosilane' },
  { formula: 'H2B-NCO', name: 'isocyanatoborane(PIN' },
]);
