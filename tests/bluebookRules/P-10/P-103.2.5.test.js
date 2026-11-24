/**
 * P-103.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups
 * Acyl groups derived from organic acids, for example H2N-CHR-CO–, are named by changing the ending
 * ‘ine’ (or ‘an’ in tryptophan) into ‘yl’, for example alanyl, valyl, tryptophyl. ‘Cysteinyl’ is used
 * instead of ‘cysteyl’; ‘cystyl’ is derived from ‘cystine’ (see P-103.1.1.2).
 * The following names are used to name the acyl groups derived from dicarboxylic amino acids and their
 * corresponding amides:”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.5', [
  { formula: 'HOOC-CH2-CH(NH2)-CO–', name: 'α-aspartyl' },
  { formula: '–CO-CH2-CH(NH2)-COOH', name: 'β-aspartyl' },
  { formula: '–CO-CH2-CH(NH2)-CO–', name: 'aspartoyl' },
  { formula: 'HOOC-CH2-CH2-CH(NH2)-CO–', name: 'α-glutamyl' },
  { formula: '–CO-CH2-CH2-CH(NH2)-COOH', name: 'γ-glutamyl' },
  { formula: '–CO-CH2-CH2-CH(NH2)-CO–', name: 'glutamoyl' },
  { formula: 'H2N-CO-CH2-CH(NH2)-CO–', name: 'asparaginyl' },
  { formula: 'H2N-CO-CH2-CH2-CH(NH2)-CO–', name: 'glutaminyl' },
]);
