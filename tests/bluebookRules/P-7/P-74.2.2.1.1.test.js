/**
 * P-74.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Azo imides, analogous to azoxy compounds, have the following delocalized general structure:
 * Method (1) in P-74.2.2.1 gives preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74221a.gif', pin: '1,2,3-trimethyltriaz-2-en-2-ium-1-ide', otherNames: ['dimethyldiazene methylimide', 'trimethyldiazene imide'] },
]);
