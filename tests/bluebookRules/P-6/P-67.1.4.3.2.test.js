/**
 * P-67.1.4.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from amides of nitric acid and nitrous acid
 * The amide of nitric acid, O2N-NH2, is named ‘nitramide’ and the substituent group derived from this
 * amide by the loss of one hydrogen atom is called ‘nitramido’ by applying the general rule for naming
 * amides (see P-66.1.1.4.3); that is, changing the final letter ‘e’ of the amide name to ‘o’. Other
 * derivatives and those derived from nitrous amide, ON–NH2, are formed by substituting the acyl groups
 * ‘nitro’ and ‘nitroso’ into the appropriate substituent groups ‘amino’, ‘imino’, and ‘azanetriyl’. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.3.2', [
  { formula: '–NH-NO', preselectedPrefix: 'nitrosoamino' },
  { formula: '>N-NO2', preselectedPrefix: 'nitroazanediyl' },
  { formula: '=N-NO2', preselectedPrefix: 'nitroimino' },
  { formula: '–NH-NO2', preselectedPrefix: 'nitramido' },
  { formula: '–N=S', preselectedPrefix: 'sulfanylideneamino' },
]);
