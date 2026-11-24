/**
 * P-65.1.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amic acids
 * When a dicarboxylic acid has a retained name (see P-65.1.1) and when one of its carboxy groups is
 * replaced by a carboxamide group, –CO-NH2, the resulting structure is called an amic acid and, in
 * general nomenclature may be named by replacing the ending ‘ic acid’ of the name of the dicarboxylic
 * acid by the ending ‘amic acid’. The case of oxalic acid is special; …
 * The prefix ‘carbamoyl’ is preferred to ‘aminocarbonyl’ for naming amic acids systematically. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650106a.gif', pin: '3-bromo-2-carbamoylbenzoic acid', otherNames: ['2-(aminocarbonyl)-3-bromobenzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650106b.gif', pin: '4-(dimethylcarbamoyl)benzoic acid', otherNames: ['4-[(dimethylamino)carbonyl]benzoic acid', 'N,N-dimethylterephthalamic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650106c.gif', pin: '4-amino-4-oxobutanoic acid', otherNames: ['3-carbamoylpropanoic acid', '3-(aminocarbonyl)propanoic acid', 'succinamic acid'] },
  { formula: 'H2N-CO-COOH', pin: 'oxamic acid', notNames: ['oxalamic acid'] },
]);
