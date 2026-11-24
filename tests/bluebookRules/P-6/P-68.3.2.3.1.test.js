/**
 * P-68.3.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, suffix mode
 * Suffixes are used to denote characteristic groups present as principal groups, with the exception of
 * acids having retained names and their derivatives, as described in P-67. This method produces
 * preferred IUPAC names over those formed by functional class nomenclature, where =O, =S, =Se, =Te,
 * =NH are denoted by the class names oxide, sulfide, selenide, telluride, and imide added to the name
 * of the parent hydride.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1018, P-68.3.2.3.1, example 8. [corrected 5 June 2019]
 *     For trimethyl-λ⁵-arsanimine (PIN)
 *     read As,As,As-trimethyl-λ⁵-arsanimine (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.2.3.1', [
  { formula: 'H2P-COOH', pin: 'phosphanecarboxylic acid' },
  { formula: 'H2P-CO-NH2', pin: 'phosphanecarboxamide' },
  { formula: 'C6H5-P=O', pin: 'phenylphosphanone', notNames: ['oxo(phenyl)phosphane'] },
  { formula: '(C6H5)3P=O', pin: 'triphenyl-λ⁵-phosphanone', otherNames: ['triphenylphosphane oxide'], notNames: ['oxotriphenyl-λ⁵-phosphane'] },
  { formula: 'HP=N-CH3', pin: 'N-methylphosphanimine', notNames: ['(methylimino)phosphane'] },
  { formula: '(CH3)3As=Te', pin: 'trimethyl-λ⁵-arsanetellone', otherNames: ['trimethylarsane telluride'] },
  { formula: 'C6H5-As=S', pin: 'phenylarsanethione', notNames: ['phenyl(sulfanylidene)arsane'] },
  { formula: '(CH3)3As=NH', pin: 'As,As,As-trimethyl-λ⁵-arsanimine', otherNames: ['trimethylarsane imide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68323a.gif', pin: '2,4,6-triethoxy-1,3,5,2λ⁵,4λ⁵,6λ⁵-triazatriphosphinane-2,4,6-trione' },
]);
