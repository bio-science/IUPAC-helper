/**
 * P-65.2.1.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of nonacyl substituent groups derived from carbonic acid
 * Acyl groups derived from carbonic acid and carbonic acids modified by functional replacement are
 * divalent groups with the two free valences belonging to the ‘diyl’ type, such as CO<. When the two
 * free valences are of the ‘ylidene’ type, =C=O for example, names of acyl groups are no longer used
 * to designate such groups; systematic substitutive names are used instead.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.8', [
  { formula: '=C=O', preferredPrefix: 'oxomethylidene' },
  { formula: '=C=S', preferredPrefix: 'sulfanylidenemethylidene' },
  { formula: '=C=NH', preferredPrefix: 'iminomethylidene' },
  { formula: '=C=N-NH2', preferredPrefix: 'hydrazinylidenemethylidene' },
]);
