/**
 * P-26.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Naming amplification prefixes
 * Names of amplificant prefixes are those of allowed rings or ring systems (see P-26.2.2.2.1) modified
 * by changing the final letter ‘e’ to ‘a’, or adding the letter ‘a’ when no final letter ‘e’ is
 * present.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.2.2.1', [
  { pin: 'pyrrole' },
  { preferredPrefix: 'pyrrola' },
  { pin: 'furan' },
  { preferredPrefix: 'furana' },
  { pin: 'pyran' },
  { preferredPrefix: 'pyrana' },
  { pin: 'naphthalene' },
  { preferredPrefix: 'naphthalena' },
  { pin: 'anthracene' },
  { preferredPrefix: 'anthracena' },
]);
