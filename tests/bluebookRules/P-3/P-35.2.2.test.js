/**
 * P-35.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituents formed by subtracting one or more hydrogen atoms from mono- and dinuclear parent
 * hydrides (see P-21.1, P-21.2).
 * Systematic names are formed by the general methodology described in P-29.3.1.
 * The systematic name based on the parent hydride azane is the preferred IUPAC name for –HN– in order
 * to distinguish between HN= and –HN– both of which are commonly called ‘imino’
 * The systematic name based on the parent hydride azane is the preferred IUPAC names for –N= in order
 * to distinguish between –N< and –N= both of which are commonly called ‘nitrilo’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-35.2.2', [
  { formula: '–SH', preselectedPrefix: 'sulfanyl', notNames: ['mercapto'] },
  { formula: '–S–', preselectedPrefix: 'sulfanediyl' },
  { formula: '=S', preselectedPrefix: 'sulfanylidene' },
  { formula: '–SS–', preselectedPrefix: 'disulfanediyl' },
  { formula: '–SeH', preselectedPrefix: 'selanyl', notNames: ['selenyl'] },
  { formula: '–Se–', preselectedPrefix: 'selanediyl' },
  { formula: '=Se', preselectedPrefix: 'selanylidene' },
  { formula: '–SeSe–', preselectedPrefix: 'diselanediyl' },
  { formula: '–TeH', preselectedPrefix: 'tellanyl' },
  { formula: '–Te–', preselectedPrefix: 'tellanediyl' },
  { formula: '=Te', preselectedPrefix: 'tellanylidene' },
  { formula: '–TeTe–', preselectedPrefix: 'ditellanediyl' },
  { formula: 'H2N-NH–', name: 'hydrazinyl (preslected prefix)' },
  { formula: 'HN=N–', preselectedPrefix: 'diazenyl' },
  { formula: '–NH–', preselectedPrefix: 'azanediyl' },
  { formula: '–N=', preselectedPrefix: 'azanylylidene' },
  { formula: '≡N', preselectedPrefix: 'azanylidyne' },
]);
