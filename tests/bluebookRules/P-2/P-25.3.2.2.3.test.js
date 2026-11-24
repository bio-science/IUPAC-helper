/**
 * P-25.3.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained prefixes
 * Only the following contracted prefixes are retained for preferred IUPAC fusion names. The contracted
 * prefixes acenaphtho, perylo, isoquino, and quino are retained but are only used in general
 * nomenclature.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.2.3', [
  { preferredPrefix: 'anthra' },
  { preferredPrefix: 'naphtho' },
  { preferredPrefix: 'benzo' },
  { preferredPrefix: 'phenanthro' },
  { preferredPrefix: 'furo' },
  { preferredPrefix: 'imidazo' },
  { preferredPrefix: 'pyrido' },
  { preferredPrefix: 'pyrimido' },
  { preferredPrefix: 'thieno' },
]);
