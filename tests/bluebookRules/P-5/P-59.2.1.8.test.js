/**
 * P-59.2.1.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a substituent is itself substituted, all the subsidiary substituents are named as prefixes.
 * The substituent bearing the subsidiary substituents is regarded as a ‘parent substituent’ (analogous
 * to a parent compound). …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.2.1.8', [
  { pin: '4,5-dichloro-2-[4-chloro-2-(hydroxymethyl)-5-oxohexyl]cyclohexane-1-carboxylic acid' },
]);
