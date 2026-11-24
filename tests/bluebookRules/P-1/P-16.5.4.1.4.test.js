/**
 * P-16.5.4.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In determining the nesting order where square brackets are used for an isotopically labeled
 * compound, by convention, parenthesis are used.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.4.1.4', [
  { pin: '1-(amino[¹⁴C]methyl)cyclopentan-1-ol' },
]);
