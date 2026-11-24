/**
 * P-15.4.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unbranched chains are numbered continuously from one end to the other so as to give a lower set of
 * locants to heteroatoms considered together as a set without regard to kind, and then, if there is a
 * choice, to heteroatoms cited first in the seniority order given in P-15.4.1.2.
 * In these recommendations, skeletal replacement (‘a’) nomenclature generates new acyclic parent
 * hydrides whose numbering is fixed, as it is for rings and ring systems; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.4.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504j.gif', pin: '8-thia-2,4,6-trisiladecane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504k.gif', pin: '2-oxa-4,6,8-trisilanonane' },
]);
