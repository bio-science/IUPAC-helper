/**
 * P-25.5.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the fused ring system can only be named using skeletal (‘a’) replacement nomenclature, any
 * heteroatoms in bridge are also named using skeletal replacement (‘a’) nomenclature. The replacement
 * terms are cited at the front of the corresponding hydrocarbon bridged fused ring system.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.5.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250501d.gif', pin: '2,3,9-trioxa-5,8-methanocyclopenta[cd]azulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250501e.gif', pin: '1H-3,10-dioxa-2a¹,5-ethanocycloocta[cd]pentalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250501f.gif', pin: '2H,5H-4,6,11-trioxa-1-thia-5,8b-[1,2]epicyclopentacyclopenta[cd]-s-indacene' },
]);
