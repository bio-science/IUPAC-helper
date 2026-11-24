/**
 * P-65.1.7.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of acyl groups corresponding to carboxylic acids having retained names that are
 * preferred IUPAC names are named systematically using the infixes of functional replacement
 * nomenclature; these names are preferred IUPAC names.
 * The use of systematically derived acyl groups from chalcogen analogues of carboxylic acids is a
 * change for formic, acetic, benzoic, and oxalic acids.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 771, P-65.1.7.2.3, last example. [corrected 5 June 2019]
 *     For bis(sulfanylidene)ethane-1,2-diyl
 *     read bis(sulfanylidene)ethanediyl
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.2.3', [
  { formula: 'CH3-CSe–', preferredPrefix: 'ethaneselenoyl' },
  { formula: 'HCS–', preferredPrefix: 'methanethioyl' },
  { formula: 'C6H5-CS–', preferredPrefix: 'benzenecarbothioyl' },
  { formula: '–CS-CS–', preferredPrefix: 'ethanebis(thioyl)' },
]);
