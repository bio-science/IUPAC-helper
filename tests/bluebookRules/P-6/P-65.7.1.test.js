/**
 * P-65.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Symmetric anhydrides
 * Symmetric anhydrides of monobasic acids, substituted or unsubstituted, are named by replacing the
 * term ‘acid’ of an acid name by the class name ‘anhydride’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 827, P-65.7.1, example 7 (return to how printed). [Corrected 8 October 2025]
 *     Delete bis(chloroacetic) anhydride (PIN)
 *     for chloroacetic anhydride
 *     read chloroacetic anhydride (PIN)
 *   Page 827, P-65.7.1, example 8. [modified 9 January 2019]
 *     For Cl-CH2-CH2-SO)2O
 *     read (Cl-CH2-CH2-SO)2O
 *     for 2-chloroethane-1-sulfinic anhydride (PIN)
 *     read 2-chloroethane-1-sulfinic anhydride
 *     add bis(2-chloroethane-1-sulfinic) anhydride (PIN)
 *   Page 828, P-65.7.1, example 8 (return to how printed). [Corrected 8 October 2025]
 *     Delete bis(2-chloroethane-1-sulfinic) anhydride (PIN)
 *     for 2-chloroethane-1-sulfinic anhydride
 *     read 2-chloroethane-1-sulfinic anhydride (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.1', [
  { formula: 'CH3-CO-O-CO-CH3', pin: 'acetic anhydride' },
  { formula: 'C6H5-CS-O-CS-C6H5', pin: 'benzenecarbothioic anhydride', otherNames: ['thiobenzoic anhydride'] },
  { formula: '(CH3-CH2-CH2-CH2-CH2-CO)2O', pin: 'hexanoic anhydride' },
  { formula: 'CH3-CH2-CS-O-CS-CH2-CH3', pin: 'propanethioic anhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650701a.gif', pin: 'cyclohexanecarboxylic anhydride' },
  { formula: 'C6H5-SO2-O-SO2-C6H5', pin: 'benzenesulfonic anhydride' },
  { formula: '(Cl-CH2-CO)2O', pin: 'chloroacetic anhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650701b.gif', pin: '2-chloroethane-1-sulfinic anhydride' },
]);
