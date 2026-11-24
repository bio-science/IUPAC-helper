/**
 * P-31.1.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bi- and polycyclic von Baeyer heterocycles named by skeletal replacement (‘a’) nomenclature. In
 * heterocyclic compounds formed using skeletal replacement (‘a’) nomenclature, low locants are
 * assigned to heteroatoms, in accord with the fixed numbering of the system, then to unsaturated
 * sites.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.4.4', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104s.gif', pin: '2-thiabicyclo[2.2.2]oct-5-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104t.gif', pin: '2-oxabicyclo[2.2.1]hept-5-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104u.gif', pin: '3-azabicyclo[3.2.2]non-6-ene' },
]);
