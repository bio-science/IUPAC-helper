/**
 * P-61.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “DIAZO COMPOUNDS
 * Compounds containing a group =N2 attached to a single carbon atom are named by adding the prefix
 * ‘diazo’ to the name of the parent hydride or functional parent hydride (see also P-74.2.2.2.3).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.4', [
  { formula: 'CH2N2', pin: 'diazomethane' },
  { formula: 'N2CH-CO-O-C2H5', pin: 'ethyl diazoacetate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610400a.gif', pin: '1-diazo-1-(trimethylsilyl)propan-2-one', otherNames: ['1-diazo-1-(trimethylsilyl)acetone'] },
]);
