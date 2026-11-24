/**
 * P-66.6.5.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic acetals and ketals
 * Cyclic acetals as the principal function are named as heterocyclic compounds and these names are
 * preferred IUPAC names; cyclic ketals are spiro compounds that are named in accordance with the rules
 * described in Section P-24 giving preferred IUPAC names.
 * Functional class nomenclature using the name of the appropriate divalent substituent groups may be
 * used in general nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 913, P-66.6.5.1.2, example on this page. [corrected 30 March 2022]
 *     For [2-(1,3-dioxolan-2-yl)ethyl]trimethylsilane (PIN)
 *     read [2-(1,3-dioxolan-2-yl)ethyl]tri(methyl)silane (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.5.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66651e.gif', pin: '2-ethyl-1,3-dioxolane', otherNames: ['propanal ethylene acetal'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66651f.gif', pin: '1,4-dioxaspiro[4.5]decane', otherNames: ['cyclohexanone ethylene ketal'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66651g.gif', name: '3-(trimethylsilyl)propanal ethylene ketal' },
]);
