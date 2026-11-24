/**
 * P-69.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Organometallic compounds with unsaturated molecules and substituent groups
 * Organic molecules used as ligands are named substitutively in accordance with principles, rules. and
 * conventions of substitutive nomenclature and cited in the name of the organometallic compound with
 * the appropriate ‘η’ (hapto) symbols. This method is preferred to that consisting of using prefixes
 * only to denote characteristic groups in the organic part of the organometallic compound.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1041, P-69.2.6, example on this page. [modified 22 April 2020]
 *     For [(1,2,5,6-η)-cycloocta-1,5-diene)](η⁶-phenyltriphenylboranuide)rhodium
 *     read [(1,2,5,6-η)-cycloocta-1,5-diene][triphenyl(η⁶-phenyl)boranuido]rhodium
 *     for [(1,2,5,6-η)-cycloocta-1,5-diene)](η⁶-phenyltriphenylborato)rhodium
 *     read [(1,2,5,6-η)-cycloocta-1,5-diene][triphenyl(η⁶-phenyl)borato]rhodium
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.2.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69260a.gif', name: 'tricarbonyl{1-[2-(diphenylphosphanyl)-η⁶-phenyl]-N,N-dimethylethan-1-amine}chromium' },
]);
