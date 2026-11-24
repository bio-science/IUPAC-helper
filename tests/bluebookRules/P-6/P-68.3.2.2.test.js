/**
 * P-68.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parent hydrides
 * Parent hydrides are formed by the methods described in Chapter P-2. They are mononuclear, acyclic
 * polynuclear, and cyclic ring systems and are preselected names (see P-12.2) The λ-convention is used
 * to denote pentavalent phosphorus and arsenic atoms. Retained names for use only in general
 * nomenclature are phosphine, phosphorane, arsine, arsorane, stibine, and stiborane.
 * Preferred names are selected as indicated in Chapter P-2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1017, P-68.3.2.2, example 6. [corrected 1 July 2020]
 *     For cyclotriphosphazene
 *     read (not cyclotriphosphazene, which has only one double bond)
 *   Page 1017, P-68.3.2.2, example 9. [modified 7 August 2019]
 *     Add 3,5-dioxa-4-phospha-2-silaheptane
 *     delete all of the Note:
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.2.2', [
  { formula: 'PH3', preselectedName: 'phosphane', otherNames: ['phosphine'] },
  { formula: 'AsH5', preselectedName: 'λ⁵-arsane', otherNames: ['arsorane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322a.gif', preselectedName: 'diphosphane', otherNames: ['diphosphine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322b.gif', preselectedName: 'pentaarsane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322c.gif', preselectedName: 'pentaphospholane', otherNames: ['cyclopentaphosphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322d.gif', preselectedName: '1,3,5,2,4,6-triazatriphosphinine', notNames: ['cyclotriphosphazene', 'which has only one double bond'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322e.gif', pin: '2,6-dioxa-7-aza-1-phosphabicyclo[2.2.2]octane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322f.gif', pin: 'arsinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322g.gif', pin: 'ethyl methylsilyl phosphonite', otherNames: ['3,5-dioxa-4-phospha-2-silaheptane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68322h.gif', pin: '1,1′-bistibinane' },
]);
