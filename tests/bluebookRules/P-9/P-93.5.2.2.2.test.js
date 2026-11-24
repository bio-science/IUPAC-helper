/**
 * P-93.5.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Stereodescriptors ‘cis’ and ‘trans’
 * Stereodescriptors ‘cis’ and ‘trans’ can be used in general nomenclature only to specify the ‘cis’ or
 * ‘trans’ arrangement of ligands on bridgeheads. CIP stereodescriptors, preceded by the prefix ‘rel’,
 * must be used in association with preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93522g.gif', pin: 'rel-(1R,10R)-1-methylbicyclo[8.3.1]tetradecane', otherNames: ['1-methyl-trans-bicyclo[8.3.1]tetradecane'] },
]);
