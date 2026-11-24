/**
 * P-63.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterols
 * When the hydroxy group is attached to an atom other than carbon, hydroxy compounds belong to a
 * compound class called heterols. They are classified as hydroxy compounds and named using the suffix
 * ‘ol’, unless they are classified as acids and denoted by a retained name. Names formed using a
 * suffix are preferred to those formed by means of the prefix ‘hydroxy’.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 696, P-63.1.3, example 1. [corrected 27 February 2019]
 *     For hydroxy(trimethyl)silane
 *     read hydroxytri(methyl)silane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.1.3', [
  { formula: '(CH3)3Si-OH', pin: 'trimethylsilanol', otherNames: ['hydroxytri(methyl)silane'] },
  { formula: '(CH3-CH2)2AlOH', name: 'diethylalumanol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630103a.gif', pin: 'piperidin-1-ol', otherNames: ['1-hydroxypiperidine', 'N-hydroxypiperidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630103b.gif', pin: 'pyrrolidine-1,2-diol', otherNames: ['1-hydroxypyrrolidin-2-ol', 'N-hydroxypyrrolidin-2-ol'] },
  { formula: 'P(OH)3', name: 'phosphorous acid', notNames: ['phosphanetriol'] },
  { formula: 'H2As-OH', name: 'arsinous acid', notNames: ['arsanol'] },
]);
