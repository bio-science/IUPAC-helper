/**
 * P-33.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “DEFINITIONS
 * Suffixes are divided into ‘functional suffixes’ that express characteristic groups and ‘cumulative
 * suffixes’ that are used to denote radicals and ions. Functional suffixes (P-33.2) are used to denote
 * characteristic groups; they are exclusive because only one can be placed at the end of a name to
 * represent the principal characteristic group or function. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-33.1', [
  { pin: 'methane' },
  { pin: 'methanium' },
  { pin: 'methane' },
  { pin: 'methanamine' },
  { pin: 'methanaminium' },
  { pin: 'ethane' },
]);
