/**
 * P-24.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monospiro ring systems with different ring components, at least one being a polycyclic ring system
 * to which skeletal replacement (‘a’) nomenclature does not apply, are formed by placing the ring
 * component names in alphanumerical order within square brackets. The position of the spiro atom is
 * denoted by appropriate locants separated by a comma and placed between the names of the two ring
 * components. …
 * Note: In naming polycyclic spiro ring systems consisting of different ring components, the first
 * ring to be cited is determined by alphabetical order and not by seniority of the rings or ring
 * systems.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240501a.gif', pin: 'spiro[cyclohexane-1,1′-indene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240501b.gif', pin: 'spiro[piperidine-4,9′-xanthene]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240501c.gif', pin: '1′H-spiro[imidazolidine-4,2′-quinoxaline]' },
]);
