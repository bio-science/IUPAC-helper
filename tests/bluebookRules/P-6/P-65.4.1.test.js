/**
 * P-65.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General methodology
 * Acyl group names that are described in preceding sections are used unchanged to denote substituent
 * groups. Thus, the traditional way of using acyl groups derived from acyclic carboxylic acids to name
 * ketones, pseudoketones, and heterones is maintained (see P-65.1.7 for more examples).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650401a.gif', pin: '2-acetylbenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650401b.gif', pin: '2-(methanesulfonyl)benzoic acid', otherNames: ['2-(methylsulfonyl)benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650401c.gif', pin: '2-(cyclohexanecarbonyl)naphthalene-1-carboxylic acid', otherNames: ['2-(cyclohexylcarbonyl)naphthalene-1-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650401e.gif', pin: '4-(cyclohexanesulfinyl)morpholine-2-carboxylic acid', otherNames: ['4-(cyclohexylsulfinyl)morpholine-2-carboxylic acid'] },
]);
