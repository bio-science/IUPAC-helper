/**
 * P-64.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In cyclic pseudoketones, the prefix ‘oxo’ and/or acyl group prefixes are used to denote a carbonyl
 * group:
 * (a) when all carbonyl groups cannot be cited as suffixes; or
 * (b) in the presence of a characteristic group having priority to be cited as suffix;
 * Acyl prefixes are used to name pseudoketones (‘hidden amides’) having the structure R-CO-NP-64.2.2)”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640502a.gif', pin: '3-(2-oxopropyl)piperidin-2-one', otherNames: ['3-acetonylpiperidin-2-one', '1-(2-oxopiperidin-3-yl)propan-2-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640502b.gif', pin: '3-propanoylphosphepan-2-one', otherNames: ['3-propionylphosphepan-2-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640502c.gif', pin: '5-oxooxolane-2-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640502d.gif', pin: '1-(piperidin-1-yl)propan-1-one', otherNames: ['1-propanoylpiperidine', '1-propionylpiperidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640502e.gif', pin: '1-(3,4-dihydroquinolin-1(2H)-yl)ethan-1-one', otherNames: ['1-acetyl-1,2,3,4-tetrahydroquinoline'] },
]);
