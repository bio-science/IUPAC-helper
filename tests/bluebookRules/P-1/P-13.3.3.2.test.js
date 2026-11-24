/**
 * P-13.3.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “With one or more substituent prefix name(s)
 * Here the separate word is a class or subclass name representing the characteristic group or the kind
 * of characteristic group to which the substituents are linked (see also functional class
 * nomenclature, P-15.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.3.3.2', [
  { formula: 'CH3–', preferredPrefix: 'methyl' },
  { formula: '–OH', name: 'alcohol (class name)' },
  { formula: 'CH3-OH', pin: 'methanol', otherNames: ['methyl alcohol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303k.gif', name: 'cyclohexyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303k.gif', name: 'cyclohexyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303l.gif', name: 'ketone' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1303m.gif', pin: 'dicyclohexylmethanone', otherNames: ['dicyclohexyl ketone'] },
  { formula: 'CH3–', name: 'methyl' },
  { formula: 'C6H5–', name: 'phenyl' },
  { formula: '–O–', name: 'oxy' },
  { formula: 'CH3-O-C6H5', pin: 'anisole', otherNames: ['methyl phenyl ether', 'methoxybenzene'] },
  { formula: 'C6H5-CH2–', preferredPrefix: 'benzyl' },
  { formula: '–CN', name: 'cyanide' },
  { formula: 'C6H5-CH2-CN', pin: 'phenylacetonitrile', otherNames: ['benzyl cyanide'] },
]);
