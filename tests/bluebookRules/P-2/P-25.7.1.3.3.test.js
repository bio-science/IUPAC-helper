/**
 * P-25.7.1.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen with bridged fused ring systems
 * All indicated hydrogen atoms are indicated at the front of the complete name.
 * Note: Citation of indicated hydrogen in bridged fused ring systems in this manner is completely
 * consistent with its citation for spiro atoms (see P-24.3.2) and ring assemblies (see P-28.2.3).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.7.1.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701m.gif', pin: '2H,7H-4a,7-ethano-1-benzopyran', otherNames: ['2H,7H-4a,7-ethanochromene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701n.gif', pin: '1H-3a,7-ethanoazulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701o.gif', pin: '1H,15H-12,5-[2,3]epipyranoanthra[2,3-f]isoindole' },
]);
