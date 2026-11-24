/**
 * P-65.6.3.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature is senior to functional class nomenclature for preferred IUPAC for
 * esters”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bf.gif', pin: '4-(acetyloxy)benzoic acid', otherNames: ['4-hydroxybenzoic acid acetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bg.gif', name: '5α-cholestane-3β,6α-diyl diacetate' },
]);
