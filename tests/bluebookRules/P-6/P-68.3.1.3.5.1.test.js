/**
 * P-68.3.1.3.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives of formazan
 * Preferred names are constructed systematically as derivatives of formazan when prefixes only are
 * present or when the principal characteristic group is attached directly to the formazan structure.
 * Otherwise, the functionalized formazan parent must be expressed according to the seniority rules
 * applied in constructing names (see P-4).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1012, P-68.3.1.3.5.1, example 1. [corrected 20 March 2019]
 *     For [hydrazinylidene(phenyl)methyl]phenyldiazene
 *     read [phenyl(phenyldiazenyl)methylidene]hydrazine
 *   Page 1012, P-68.3.1.3.5.1, example 2. [corrected 20 March 2019]
 *     For [phenyl(phenylhydrazinylidene)methyl]diazene
 *     read [diazenyl(phenyl)methylidene]phenylhydrazine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.3.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313w.gif', pin: '1,3-diphenylformazan', otherNames: ['phenyl(phenyldiazenyl)methanone hydrazone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313x.gif', pin: '3,5-diphenylformazan', otherNames: ['phenyl(diazenyl)methanone 2-phenylhydrazone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313y.gif', pin: '1,5-diphenylformazan-3-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313z.gif', pin: '1-(phenyldiazenyl)-1-(phenylhydrazinylidene)propan-2-one', otherNames: ['3-acetyl-1,5-diphenylformazan'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313aa.gif', pin: '1-phenyl-2-(phenyldiazenyl)-2-(phenylhydrazinylidene)ethan-1-one', otherNames: ['3-benzoyl-1,5-diphenylformazan'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68313ab.gif', pin: 'N′-[(phenyldiazenyl)methylidene]acetohydrazide' },
]);
