/**
 * P-65.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups formed by concatenation
 * When the name of an acyl group cannot be derived directly from that of the acid expressed by a
 * suffix, a concatenation procedure is used. For this procedure names of divalent mononuclear acyl
 * groups are required. Acyl groups corresponding to sulfuric and sulfurous acids and the corresponding
 * selenium and tellurium acids are formed from the acids by subtracting all -OH groups from the parent
 * acid. The names used in the nomenclature of organic compounds are as follows:
 * These acyl groups are modified by infixes in functional replacement nomenclature to indicate
 * replacement by ‘=S’, ‘=Se’, ‘=Te’, ‘=NH’, and ‘=N-NH2’.
 * Prefixes denoting characteristic groups can then be attached to these divalent acyl group names. The
 * prefix ‘hydro-’ for H can also be used. This traditional method generates preferred IUPAC names. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.2.3', [
  { formula: '–SO2–', preselectedPrefix: 'sulfonyl' },
  { formula: '–SO–', preselectedPrefix: 'sulfinyl' },
  { formula: '–SeO2–', preselectedPrefix: 'selenonyl' },
  { formula: '–SeO–', preselectedPrefix: 'seleninyl' },
  { formula: '–TeO2–', preselectedPrefix: 'telluronyl' },
  { formula: '–TeO–', preselectedPrefix: 'tellurinyl' },
  { formula: '–S(=O)(=S)–', preselectedPrefix: 'sulfonothioyl' },
  { formula: '–S(=S)(=S)–', preselectedPrefix: 'sulfonodithioyl' },
  { formula: '–S(=NH)–', preselectedPrefix: 'sulfinimidoyl' },
  { formula: '–Se(=O)(=NNH2)–', preselectedPrefix: 'selenonohydrazonoyl' },
  { formula: '–Se(=S)(=NH)–', preselectedPrefix: 'selenonimidothioyl' },
  { formula: 'CH3O-SO2–', preferredPrefix: 'methoxysulfonyl' },
  { formula: 'Cl-S(O)–', preselectedPrefix: 'chlorosulfinyl' },
  { formula: 'H2N-SO2–', preselectedPrefix: 'sulfamoyl' },
  { formula: 'H-SO–', preselectedPrefix: 'hydrosulfinyl' },
  { formula: 'CH3-CO-O-SO2–', name: 'acetoxysulfonyl' },
  { formula: 'CH3-O-S(=NH)–', preferredPrefix: 'S-methoxysulfinimidoyl' },
  { formula: 'HO-SO2-O–', preselectedPrefix: 'sulfooxy' },
  { formula: 'H-SeO2–', preselectedPrefix: 'hydroselenonyl' },
  { formula: '–S-SO2-S–', preselectedPrefix: 'sulfonylbis(sulfanediyl)' },
  { formula: '–O-SO-O–', preselectedPrefix: 'sulfinobis(oxy)' },
]);
