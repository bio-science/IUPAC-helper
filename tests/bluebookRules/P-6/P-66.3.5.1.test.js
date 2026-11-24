/**
 * P-66.3.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names for hydrazides derived from carbonic and cyanic acids are chosen according to
 * the seniority order of classes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66351a.gif', pin: 'cyanohydrazide', otherNames: ['carbononitridic hydrazide', 'hydrazinecarbonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66351b.gif', pin: 'hydrazinecarboxylic acid', otherNames: ['carbonohydrazidic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66351c.gif', pin: 'hydrazinecarbohydrazide', otherNames: ['carbonic dihydrazide'] },
]);
