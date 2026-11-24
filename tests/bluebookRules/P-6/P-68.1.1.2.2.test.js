/**
 * P-68.1.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds formed of alternating heteroatoms are named in accordance with Rule P-21.2.3.1 . They are
 * considered as nonfunctional parent structures having preselected names, except when nitrogen atoms
 * are present; then the compounds are named as amines (see P-62.2.).
 * When nitrogen atoms are present, this is a change from the 1993 Guide (ref. 2) because the ‘amine’
 * characteristic group was not recognized there.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112g.gif', pin: 'tetramethyldiboroxane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112h.gif', preselectedName: 'trialuminoxane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112i.gif', pin: '1-methyl-N-(methylboranyl)boranamine' },
]);
