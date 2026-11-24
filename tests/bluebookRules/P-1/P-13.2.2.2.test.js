/**
 * P-13.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The affixes ‘thio’, ‘seleno’, and ‘telluro’ indicate replacement of an oxygen atom of a
 * characteristic group by another chalcogen atom.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 12, P-13.2.2.2, example 3. [corrected 28 October 2016]
 *     For 4-methaneselenoylbenzoic acid (PIN)
 *     read 4-(methaneselenoyl)benzoic acid (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.2.2.2', [
  { formula: 'C6H5-COOH', name: 'benzoic acid' },
  { formula: 'C6H5-C{O/Se}H', pin: 'benzenecarboselenoic acid' },
  { formula: 'CH3-[CH2]4-COOH', pin: 'hexanoic acid' },
  { formula: 'CH3-[CH2]4-C(S)SH', pin: 'hexane(dithioic) acid', notNames: ['hexanedithioic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302g.gif', pin: '4-formylbenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1302h.gif', pin: '4-(methaneselenoyl)benzoic acid' },
]);
