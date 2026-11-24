/**
 * P-65.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Mixed anhydrides
 * Anhydrides derived from different monobasic acids are named by citing in alphabetical order the
 * names of the two acids, substituted or unsubstituted, without the class name ‘acid’ followed by the
 * class name ‘anhydride’ as a separate word.
 * Mixed anhydrides with carbonic acid, cyanic acid, and inorganic acids are named as anhydrides. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.2', [
  { formula: 'CH3-CO-O-CO-CH2-CH3', pin: 'acetic propanoic anhydride' },
  { formula: 'C6H5-SO-O-SO2-CH2-CH3', pin: 'benzenesulfinic ethanesulfonic anhydride' },
  { formula: 'C6H5-CO-O-CS-CH3', pin: 'benzoic ethanethioic anhydride', otherNames: ['benzoic thioacetic anhydride'] },
  { formula: 'CH3-CO-O-CO-CH2-Cl', pin: 'acetic chloroacetic anhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650701c.gif', pin: 'chloroacetic 4-nitrobenzene-1-sulfonic anhydride' },
  { formula: 'CH3-CO-O-CN', pin: 'acetic cyanic anhydride' },
  { formula: 'C6H5-CO-O-PH2', pin: 'benzoic phosphinous anhydride' },
  { formula: '(HO)2B-O-CO-CH3', pin: 'acetic boric monoanhydride' },
]);
