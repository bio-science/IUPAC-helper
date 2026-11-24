/**
 * P-65.2.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of the ‘carbonoperoxoyl’ prefix, –CO-OOH, are named in three ways:
 * (1) by using an infix when the position of the chalcogen atoms is not known;
 * (2) by compound prefixes formed by concatenation;
 * (3) by thiohydroperoxy prefixes using the italic prefixes SO- or OS-, as necessary.
 * Methods (1) or (2) lead to preferred IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 783, P-65.2.1.7, example 4. [corrected 6 March 2019]
 *     For (3) (dithiohydroperoxycarbonyl)oxy
 *     read (3) [(dithiohydroperoxy)carbonyl]oxy
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.7', [
  { formula: 'HOS-CSe–', preferredPrefix: '(hydroxysulfanyl)carbonoselenoyl' },
  { preferredPrefix: 'carbono(thioperoxoyl)' },
  { formula: 'HS-O-CO-O–', preferredPrefix: '[(sulfanyloxy)carbonyl]oxy' },
  { formula: 'HSS-CO-O–', preferredPrefix: '(disulfanylcarbonyl)oxy' },
]);
