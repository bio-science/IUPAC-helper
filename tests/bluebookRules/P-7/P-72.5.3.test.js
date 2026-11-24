/**
 * P-72.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anionic characteristic groups on anionic parent hydrides
 * Polyanions with anionic centers both in the parent hydride part of the structure and on a
 * characteristic group that may be expressed as an anionic suffix are named by adding the anionic
 * suffix to the name of a parent anion formed according to Rules P-72.2.2.1 and P-72.2.2.2. Where
 * there is a choice, low locants are assigned to the anionic skeletal atoms.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1078, P-72.5.3, example 1. [corrected 10 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72530a.gif', pin: 'cyclohexan-1-ide-4-sulfonate' },
  { formula: '⁻O-CO-CH2-CH2-C≡C⁻', pin: 'pent-1-yn-1-id-5-oate' },
]);
