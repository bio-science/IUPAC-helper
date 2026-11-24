/**
 * P-34.1.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitrogenous compounds”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 416, P-34.1.1.5, example 2. [modified 6 February 2019]
 *     For (hydrazinylidenemethyl)diazene
 *     read (diazenylmethylidene)hydrazine
 *   Page 416, P-34.1.1.5, example 3. [modified 24 October 2018]
 *     For guanidine (special substitution; see P-66.4.1.2.1)
 *     read guanidine (substitution allowed; see P-66.4.1.2.1)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-34.1.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340101d.gif', pin: 'aniline', otherNames: ['benzenamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340101e.gif', pin: 'formazan' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340101f.gif', pin: 'guanidine', otherNames: ['carbonimidic diamide'] },
  { formula: 'H2N-OH', name: 'hydroxylamine' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340101g.gif', pin: 'oxamide', otherNames: ['oxalic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340101h.gif', pin: 'urea', otherNames: ['carbonic diamide'] },
]);
