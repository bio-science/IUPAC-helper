/**
 * P-66.4.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a senior characteristic group, the prefixes for the group –C(=N-NH2)-NH-NH2 are
 * ‘hydrazinecarbohydrazonoyl’ (preferred prefix) or ‘C-hydrazinylcarbonohydrazonoyl’. When this group
 * is located at the end of a carbon chain, the prefixes ‘hydrazinyl’ and ‘hydrazinylidene’ are
 * preferred in order to avoid fragmenting the chain.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.3.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66434a.gif', pin: '3-hydrazinyl-3-hydrazinylidenepropanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66434b.gif', pin: '3-(hydrazinecarbohydrazonoyl)benzoic acid', otherNames: ['3-(C-hydrazinylcarbonohydrazonoyl)benzoic acid', '3-[hydrazinyl(hydrazinylidene)methyl]benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66434c.gif', pin: '4-[C-(carbamimidoyloxy)methanimidohydrazido]benzoic acid', otherNames: ['4-{2-[C-(carbamimidoyloxy)methanimidoyl]hydrazin-1-yl}benzoic acid'] },
]);
