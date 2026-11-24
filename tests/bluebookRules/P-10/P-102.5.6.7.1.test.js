/**
 * P-102.5.6.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Intramolecular anhydrides
 * An intramolecular ether (commonly called an intramolecular anhydride), formally arising by
 * elimination of water from two hydroxy groups of a single molecule of a monosaccharide (aldose,
 * ketose) or monosaccharide derivative, is named by adding the detachable prefix ‘anhydro’, preceded
 * by a pair of locants identifying the two hydroxy groups, to the name of the monosaccharide.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102567a.gif', name: '1,5-anhydro-D-galactitol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102567b.gif', name: '3,6-anhydro-2,4,5-tri-O-methyl-D-glucose' },
]);
