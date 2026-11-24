/**
 * P-65.1.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, suffix mode
 * The name of an acid in which the carbonyl oxygen atom of a carboxylic acid group has been replaced
 * by =NNH2 is formed by functional replacement nomenclature. The infix ‘hydrazon(o)’ is used to modify
 * the ‘ic acid’ or ‘oic acid’ ending of the retained name of an acid; or the ‘oic acid’ or ‘carboxylic
 * acid’ suffix of a systematic name of an acid is changed to ‘hydrazonic acid’ or ‘carbohydrazonic
 * acid’.
 * Preferred IUPAC names for hydrazonic acids are those derived from systematic preferred IUPAC names
 * of carboxylic acids.
 * The use of systematic substitutive names for hydrazonic acids is a change for formic acid, acetic
 * acid, benzoic acid, and oxalic acid.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 757, P-65.1.3.2.1, example 1. [corrected 10 October 2018]
 *     Replace the structure with:
 *     H-C(=N-NH2)-OH
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.3.2.1', [
  { formula: 'H-C(=N-NH2)-OH', pin: 'methanehydrazonic acid', otherNames: ['formohydrazonic acid'] },
  { formula: 'CH3-C(=N-NH2)-OH', pin: 'ethanehydrazonic acid', otherNames: ['acetohydrazonic acid'] },
  { formula: 'C6H5-C(=N-NH2)-OH', pin: 'benzenecarbohydrazonic acid', otherNames: ['benzohydrazonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103i.gif', pin: 'butanehydrazonic acid', otherNames: ['butyrohydrazonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103j.gif', pin: 'butanedihydrazonic acid', otherNames: ['succinohydrazonic acid'] },
  { formula: 'HO-C(=N-NH2)-C(=N-NH2)-OH', pin: 'ethanedihydrazonic acid', otherNames: ['oxalohydrazonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103k.gif', pin: 'cyclohexanecarbohydrazonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650103l.gif', pin: 'benzene-1,2-dicarbohydrazonic acid', otherNames: ['phthalohydrazonic acid'] },
]);
