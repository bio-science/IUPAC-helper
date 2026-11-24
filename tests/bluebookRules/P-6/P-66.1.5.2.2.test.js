/**
 * P-66.1.5.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sultims are tautomers of sultams and are named as described in P-66.1.5.2.1 for sultams, using the
 * term ‘sultim’ in place of ‘sultam’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.5.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66152c.gif', pin: '1-hydroxy-4,5-dihydro-3H-1λ⁶,2-thiazol-1-one', otherNames: ['1-hydroxy-4,5-dihydro-3H-1λ⁴,2-thiazole 1-oxide', 'propane-1,3-sultim'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66152d.gif', pin: '1-hydroxy-1λ⁶-thia-2-azacyclododec-1-en-1-one', otherNames: ['1-hydroxy-1λ⁴-thia-2-azacyclododec-1-ene 1-oxide', 'decane-1,10-sultim'] },
]);
