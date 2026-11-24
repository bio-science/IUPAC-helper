/**
 * P-25.3.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monocyclic hydrocarbons (annulenes).
 * Monocyclic parent components are named as [n]annulenes where n represent the number of carbon atoms.
 * The series starts at n = 7, because the retained name ‘benzene’ is preferred for n = 6. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302a.gif', pin: 'cyclohepta-1,3,5-triene', otherNames: ['1H-[7]annulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302b.gif', pin: 'cyclodeca-1,3,5,7,9-pentaene' },
]);
