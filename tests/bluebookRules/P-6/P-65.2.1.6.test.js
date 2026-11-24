/**
 * P-65.2.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘carboxy’ and prefixes for chalcogen analogues.
 * The prefix ‘carboxy’ for –COOH is a retained prefix. Chalcogen analogues are named by functional
 * replacement nomenclature provided that it is not necessary to specify the location of the chalcogen
 * …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.6', [
  { preferredPrefix: 'thiocarboxy' },
  { formula: 'HS-CO–', preferredPrefix: 'sulfanylcarbonyl' },
  { formula: 'HS-CS–', preferredPrefix: 'dithiocarboxy' },
  { formula: 'HO-CS–', preferredPrefix: 'hydroxycarbonothioyl' },
  { formula: 'HOOC-O–', preferredPrefix: 'carboxyoxy' },
  { formula: 'HOOC-S–', preferredPrefix: 'carboxysulfanyl' },
  { formula: 'HOOC-NH–', preferredPrefix: 'carboxyamino' },
]);
