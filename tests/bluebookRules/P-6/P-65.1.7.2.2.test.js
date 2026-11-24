/**
 * P-65.1.7.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups corresponding to the carboximidic, carbohydrazonic, carbohydroximic, and
 * carbohydroxamic acids described in P-65.1.3.
 * The use of systematically derived acyl groups from imidic, hydrazonic, hydroximic, and hydroxamic
 * acids is a changes for formic, acetic, benzoic, and oxalic acids.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 770, P-65.1.7.2.2, example 3. [corrected 7 November 2018]
 *     For (oxo)phenylmethyl
 *     read oxo(phenyl)methyl
 *   Page 770, P-65.1.7.2.2, example 4. [corrected 6 March 2019]
 *     For dioxoethane-1,2-diyl
 *     read dioxoethanediyl
 *   Page 771, P-65.1.7.2.2, example 2 on this page. [corrected 28 October 2016]
 *     For diiminoethane-1,2-diyl
 *     read diiminoethanediyl
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.2.2', [
  { formula: 'CH3-C(=NH)–', preferredPrefix: 'ethanimidoyl' },
  { formula: 'HC(=NH)–', preferredPrefix: 'methanimidoyl' },
  { formula: 'C6H5-C(=NH)–', preferredPrefix: 'benzenecarboximidoyl' },
  { formula: '–C(=NH)-C(=NH)–', preferredPrefix: 'ethanediimidoyl' },
  { formula: 'HC(=NNH2)–', preferredPrefix: 'methanehydrazonoyl' },
  { formula: 'CH3-C(=NNH2)–', preferredPrefix: 'ethanehydrazonoyl' },
  { formula: 'C6H5-C(=N-OH)–', preferredPrefix: 'N-hydroxybenzenecarboximidoyl' },
]);
