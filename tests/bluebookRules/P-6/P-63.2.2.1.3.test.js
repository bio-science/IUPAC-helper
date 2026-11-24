/**
 * P-63.2.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Divalent groups, such as –O-Y-O– or –S-Y-S–, are named by adding (concatenating) the prefixes
 * ‘oxy’, ‘sulfanediyl’, etc. to the name of the divalent group Y. The multiplying prefix ‘bis’ is used
 * in preferred names instead of ‘di’ to avoid ambiguity. Parentheses are used after the multiplying
 * prefix ‘bis’, ‘tris’ etc., even around simple prefixes.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.2.1.3', [
  { formula: '–O-CH2-O–', preferredPrefix: 'methylenebis(oxy)', notNames: ['methylenedioxy'] },
  { formula: '–S-CH2-S–', preferredPrefix: 'methylenebis(sulfanediyl)' },
  { formula: '–CH2-S-CH2–', preferredPrefix: 'sulfanediylbis(methylene)', notNames: ['sulfanediyldimethylene'] },
]);
