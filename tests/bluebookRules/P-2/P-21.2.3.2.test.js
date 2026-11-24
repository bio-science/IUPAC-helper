/**
 * P-21.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterogeneous parent hydrides formed by skeletal replacement (‘a’) nomenclature
 * Heterogeneous acyclic parent hydrides consisting of chains containing at least one carbon atom and
 * heteroatoms, alike or different, and terminating with C, P, As, Sb, Bi, Si, Ge, Sn, Pb, B, Al, Ga,
 * In, or Tl are named by skeletal replacement (‘a’) nomenclature (see P-15.4.3). The use of skeletal
 * replacement (‘a’) names as preferred IUPAC names is considered in Chapter P-5.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-21.2.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210203c.gif', pin: '2,4,7,10-tetraoxaundecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210203d.gif', pin: '7,10-dioxa-2-thia-4-silaundecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P210203e.gif', pin: '2-oxa-7-thia-3,6-disilaoctane' },
]);
