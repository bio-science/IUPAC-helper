/**
 * P-64.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ketones
 * The prefix ‘oxo’ and/or acyl prefixes are used to denote carbonyl groups when:
 * (a) all carbonyl or oxo groups cannot be cited as suffixes; or
 * (b) in the presence of a characteristic group having priority to be cited as suffix.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640501a.gif', pin: '2-(2-oxopropyl)cyclohexan-1-one', otherNames: ['2-acetonylcyclohexan-1-one', '1-(2-oxocyclohexyl)propan-2-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640501b.gif', pin: '5-acetylnonane-4,6-dione', notNames: ['5-(1-oxoethyl)nonane-4,6-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640501c.gif', pin: '3-oxobutanoic acid', notNames: ['acetylacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640501d.gif', pin: '9,10-dioxo-9,10-dihydroanthracene-2-carboxylic acid', notNames: ['9,10-anthraquinone-2-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640501e.gif', pin: '4,4′-carbonyldibenzoic acid', otherNames: ['4,4′-(oxomethylene)dibenzoic acid', '4-(4-carboxybenzoyl)benzoic acid'] },
]);
