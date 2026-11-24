/**
 * P-65.1.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Aldehydic acids
 * When a dicarboxylic acid has a retained name (see P-65.1.1) and when one of its carboxy groups is
 * replaced by a formyl group, –CHO (see P-65.1.7.2.1), the resulting structure is called an aldehydic
 * acid and, in general nomenclature may be named by replacing the ending ‘ic acid’ of the name of the
 * dicarboxylic acid by the ending ‘aldehydic acid’. Preferred IUPAC names for aldehydic acids derived
 * from all dicarboxylic acids are constructed systematically. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 768, P-65.1.6.3, example 3. [corrected 18 September 2019]
 *     Delete oxalaldehydic acid
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650106f.gif', pin: '4-formylbenzoic acid', otherNames: ['terephthalaldehydic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650106g.gif', pin: '4-oxobutanoic acid', otherNames: ['3-formylpropanoic acid', 'succinaldehydic acid'] },
  { formula: 'OCH-CO-OH', pin: 'oxoacetic acid', notNames: ['glyoxylic acid'] },
]);
