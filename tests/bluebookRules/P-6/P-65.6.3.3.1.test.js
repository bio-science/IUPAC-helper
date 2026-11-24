/**
 * P-65.6.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monoesters
 * Monoesters formed from a monobasic acid and a ‘monohydroxylic’ component are named systematically by
 * placing the ‘hydroxylic’ component denoted by an organyl group (alkyl, aryl, etc.) in front of the
 * name of the acid component expressed as an anion derived from the appropriate acid (see
 * P-72.2.2.2.1).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.1', [
  { formula: 'CH3CO-O-CH2-CH3', pin: 'ethyl acetate' },
  { formula: 'CH3-[CH2]6-CO-O-C(CH3)3', pin: 'tert-butyl octanoate', otherNames: ['1,1-dimethylethyl octanoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603n.gif', pin: 'methyl cyclohexanecarboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603o.gif', pin: 'methyl 4-ethylbenzene-1-sulfonate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603p.gif', pin: 'S-(2-cyanoethyl) cyclohexanesulfinothioate', otherNames: ['{not 3-[(cyclohexanesulfinyl)sulfanyl]propanenitrile', 'nor 3-[(cyclohexylsulfinyl)sulfanyl]propanenitrile'] },
]);
