/**
 * P-65.1.7.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups derived from an acid named by means of the suffix ‘carboxylic acid’ are named by
 * changing the ‘carboxylic acid’ suffix to the suffix ‘carbonyl’. Similarly, the suffix ‘carbothioic
 * acid’ is changed to ‘carbothioyl’; the suffix ‘carboselenoic acid’ is changed to ‘carboselenoyl’;
 * the suffix ‘carbotelluroic acid’ is changed to ‘carbotelluroyl’; the suffix ‘carboximidic acid’ is
 * changed to ‘carboximidoyl’; and the suffix ‘carbohydrazonic acid’ is changed to ‘carbohydrazonoyl’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 775, P-65.1.7.4.2, example 6. [corrected 19 September 2018]
 *     For hexane-2,3,5-triyltris(thioxoemethylene)
 *     read hexane-2,3,5-triyltris(thioxomethylene)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107g.gif', preferredPrefix: 'cyclohexanecarbonyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107h.gif', preferredPrefix: 'cyclopentanecarboximidoyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107i.gif', preferredPrefix: 'cyclohexane-1,2-dicarbothioyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107j.gif', preferredPrefix: '1-methylcyclopentane-1-carbohydrazonoyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107k.gif', preferredPrefix: 'hexane-2,3,5-tricarbonyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107l.gif', preferredPrefix: 'hexane-2,3,5-tricarbothioyl' },
]);
