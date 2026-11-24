/**
 * P-64.2.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ketenes
 * Ketene is the class name for H2C=C=O and its derivatives; the name ketene can be used in general
 * nomenclature to name the unsubstituted structure and derivatives named by compulsory prefixes (see
 * Table 5.1). Other derivatives are named by using the principles for naming ketones.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ar.gif', pin: '2-butylhex-1-en-1-one', notNames: ['dibutylketene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202as.gif', pin: 'cyclohexylidenemethanone' },
  { formula: 'Br2C=C=O', pin: 'dibromoethenone', otherNames: ['dibromoketene'] },
]);
