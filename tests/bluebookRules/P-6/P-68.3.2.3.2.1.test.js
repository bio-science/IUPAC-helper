/**
 * P-68.3.2.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution of phosphanes, arsanes, and stibanes by organyl groups
 * Alkyl, aryl, etc. groups and groups derived from parent hydrides containing O, S, Se, and Te atoms
 * are always denoted by prefixes. Halides and pseudohalides are not expressed by prefixes when
 * attached directly to a P, As, or Sb atom, because functional replacement of parent acids having
 * retained names is senior for naming them as acid halides or pseudohalides (see P-67.1.2.5.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1019, P-68.3.2.3.2.1, example 7.. [corrected 12 May 2021]
 *     For ethyl(methyl)phenylphosphane (PIN)
 *     read ethyl(methyl)(phenyl)phosphane (PIN)
 *     for ethyl(methyl)phenylphosphine
 *     read ethyl(methyl)(phenyl)phosphine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.2.3.2.1', [
  { formula: '(C6H5)3P', pin: 'triphenylphosphane', otherNames: ['triphenylphosphine'] },
  { formula: 'CH3-CH2-AsH2', pin: 'ethylarsane', otherNames: ['ethylarsine'] },
  { formula: 'P(OCH3)5', pin: 'pentamethoxy-λ⁵-phosphane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323b.gif', pin: 'cyclohexylphosphane', otherNames: ['cyclohexylphosphine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323c.gif', name: '2-naphthylarsane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323d.gif', pin: 'ethyl(methyl)(phenyl)phosphane', otherNames: ['ethyl(methyl)(phenyl)phosphine'] },
]);
