/**
 * P-65.6.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acid salts of polybasic organic acids are named in two ways:
 * (1) by substitutive nomenclature in which the free acid is cited as a prefix to the name of the
 * anion;
 * (2) in the same way as the neutral salts, the remaining acid hydrogen atom(s) being indicated by the
 * word ‘hydrogen’ (preceded by a numerical prefix, ‘di’, ‘tri’, etc., as appropriate) inserted as a …
 * Method (1) generates preferred IUPAC names, except when the structure of the acid salt is unknown.
 * Anionic substituents, such as –COO⁻, –SO3⁻, –SO2⁻ are described by the prefix names ‘carboxylato’,
 * ‘sulfonato’, and ‘sulfinato’, respectively, and similarly for the corresponding selenium and
 * tellurium acids.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 802, P-65.6.2.3.1, example 1. [corrected 28 October 2016]
 *     For (1) potassium 6-carboxyheptanoate (PIN)
 *     read (1) potassium 6-carboxyhexanoate (PIN)
 *   Page 803, P-65.6.2.3.1, example 2 on this page. [corrected 28 October 2016]
 *     For (HOOC-CH2-CH2-COO⁻)3 Sb³
 *     read (HOOC-CH2-CH2-COO⁻)3 Sb³⁺
 *     for (2) antimony tris(hydrogen butanoate)
 *     read (2) antimony tris(hydrogen butanedioate)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.2.3.1', [
  { formula: 'HOOC-[CH2]5-COO⁻ K⁺', pin: 'potassium 6-carboxyhexanoate', otherNames: ['potassium hydrogen heptanedioate'] },
  { formula: 'HOOC-CH2-CH2-COO⁻ NH4⁺', pin: 'ammonium 3-carboxypropanoate', otherNames: ['ammonium hydrogen butanedioate', 'ammonium hydrogen succinate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650602b.gif', pin: 'sodium hydrogen 2-(carboxylatomethyl)benzoate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650602c.gif', pin: 'potassium sodium hydrogen propane-1,2,3-tricarboxylate' },
  { formula: '(HOOC-CH2-CH2-COO⁻)3 Sb³⁺', pin: 'antimony tris(3-carboxypropanoate)', otherNames: ['antimony tris(hydrogen butanedioate)'] },
]);
