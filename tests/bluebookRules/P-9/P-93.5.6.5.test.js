/**
 * P-93.5.6.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Type 4. Chirality due to chiral substituents.
 * Derivatives of achiral parent fullerenes in which the presence of chiral substituents does not
 * create a chiral substitution pattern have the stereogenic units located exclusively in the
 * substituents. …
 * (a) This fullerene derivative is chiral. The parent fullerene is achiral and the derivative has an
 * achiral substitution pattern. …
 * (b) If the esters of the acid in the above example were different, the parent fullerene and its
 * substitution pattern would still be achiral and therefore any chirality of the original compound
 * would …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1277, P-93.5.6.5, example. [corrected 10 October 2018]
 *     For ...[5,6]fullerene-3′,3′,3′′,3′′-tetracarboxylate
 *     read ...[5,6]fullerene-3′,3′,3′′,3′′-tetracarboxylate (PIN)
 *     Replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.6.5', [
  { pin: 'tetrakis[(1S)-1-phenylbutyl] 3′H,3′′H-dicyclopropa[8,25:16,35](C70-D5h(6))[5,6]fullerene-3′3′,3′′,3′′-tetracarboxylate' },
]);
