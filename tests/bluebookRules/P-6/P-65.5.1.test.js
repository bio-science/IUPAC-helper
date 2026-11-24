/**
 * P-65.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl halides from suffix acids
 * Acyl halides in which hydroxy groups of all acid groups expressed as the suffix denoting the
 * principal characteristic group (carboxylic, sulfonic, sulfinic, selenonic, etc. acids) have been
 * replaced by halogen atoms (F, Cl, Br, and I) are named by citing the name of the acyl group (see
 * P-65.1.7) followed by the name(s) of the specific class(es) as a separate word(s), in alphabetical
 * order, each preceded by a multiplicative prefix, as needed.
 * The names formyl, acetyl, benzoyl, oxalyl, and oxamoyl are retained as preferred prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650501a.gif', pin: 'acetyl chloride' },
  { formula: 'HCO-Br', pin: 'formyl bromide' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650501b.gif', pin: 'hexanoyl fluoride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650501c.gif', pin: 'cyclohexanecarboximidoyl chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650501d.gif', pin: 'benzenesulfinyl chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650501e.gif', pin: 'cyclohexanecarbothioyl chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650501f.gif', pin: 'benzeneseleninyl chloride' },
  { formula: 'Cl-CO-CH2-CO-Cl', pin: 'propanedioyl dichloride', otherNames: ['malonyl dichloride'] },
  { formula: 'Cl-CO-CO-Cl', pin: 'oxalyl dichloride', otherNames: ['ethanedioyl dichloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650501g.gif', pin: 'benzene-1,4-dicarbonyl dichloride', otherNames: ['terephthaloyl dichloride'] },
  { formula: 'Br-O2S-CH2-CH2-SO2-Br', pin: 'ethane-1,2-disulfonyl dibromide' },
  { formula: 'Br-CO-CH2-CH2-CO-Cl', pin: 'butanedioyl bromide chloride', otherNames: ['succinyl bromide chloride'] },
  { formula: 'H2N-CO-CO-Br', pin: 'oxamoyl bromide' },
]);
