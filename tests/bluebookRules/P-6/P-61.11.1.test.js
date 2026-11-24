/**
 * P-61.11.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Low locants are assigned as a set, without regard to kind.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.11.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P611101a.gif', pin: '4-azido-1-fluoro-2-nitrobenzene', otherNames: ['4-azido-2-nitrophenyl fluoride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P611101b.gif', pin: 'N′-nitro-N-nitroso-N-propylguanidine' },
]);
