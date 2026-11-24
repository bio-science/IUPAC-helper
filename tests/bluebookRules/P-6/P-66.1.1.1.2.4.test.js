/**
 * P-66.1.1.1.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amides derived from retained acid names given in P-65.1.1.2 are only used in general nomenclature;
 * no substitution is allowed, even on amide nitrogen atoms. Preferred IUPAC names are systematic names
 * as given by P-65.1.2.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111f.gif', pin: 'prop-2-enamide', otherNames: ['acrylamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111g.gif', pin: 'N-methylprop-2-enamide', notNames: ['N-methylacrylamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111h.gif', pin: '2-hydroxypropanamide', otherNames: ['lactamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111i.gif', pin: '2-hydroxy-N-methylpropanamide', notNames: ['N-methyllactamide'] },
]);
