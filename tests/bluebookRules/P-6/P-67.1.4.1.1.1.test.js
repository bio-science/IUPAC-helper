/**
 * P-67.1.4.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names for substituent groups derived from mononuclear noncarbon oxoacids;
 * A few names denoting monovalent acidic groups are retained. These names are preselected names when
 * unsubstituted or for chalcogen analogues when the position of chalcogen atoms introduced by …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.1.1.1', [
  { preselectedPrefix: 'azono' },
  { preselectedPrefix: 'phosphono' },
  { preselectedPrefix: 'arsono' },
  { preselectedPrefix: 'stibono' },
  { preselectedPrefix: 'thiophosphono' },
  { preselectedPrefix: 'trithiophosphono' },
]);
