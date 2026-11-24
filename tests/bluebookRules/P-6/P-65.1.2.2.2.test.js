/**
 * P-65.1.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carboxy groups attached to cyclic parent hydrides or heteroacyclic parent hydrides are always named
 * by using the suffix ‘carboxylic acid’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 751, P-65.1.2.2.2. example 3 on this page. [corrected 24 October 2018]
 *     For benzo[1,2-c:3,4-c′]bis([1,2,5]oxadiazole)-5-carboxylic acid
 *     read [benzo[1,2-c:3,4-c′]bis([1,2,5]oxadiazole)]-4-carboxylic acid
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102i.gif', pin: 'cyclopentanecarboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102j.gif', pin: 'pyridine-3-carboxylic acid', otherNames: ['nicotinic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102k.gif', pin: 'pyrrolidine-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102l.gif', pin: 'quinoline-1(2H)-carboxylic acid' },
  { formula: 'H3Si-O-SiH2-COOH', pin: 'disiloxanecarboxylic acid' },
  { formula: 'H2N-NH-COOH', pin: 'hydrazinecarboxylic acid', otherNames: ['carbonohydrazidic acid'], notNames: ['carbazic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102n.gif', pin: '4,4′-methylenedi(cyclohexane-1-carboxylic acid)' },
]);
