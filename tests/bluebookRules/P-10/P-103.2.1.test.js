/**
 * P-103.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “System for denoting locants
 * It is recommended to use ‘N’, ‘O’ and ‘S’ locants with the numerical locant of the attached carbon
 * atom as a superscript to describe substitution on a nitrogen, oxygen, or sulfur atom when more than
 * one is present. Locants ‘N²’ and ‘N⁶’ are recommended for lysine,‘Nα’,‘Nδ’ and ‘Nω’ for arginine,
 * ‘N²’ and ‘N⁵’ for glutamine,‘N²’ and ‘N⁴’ for asparagine, ‘Nα’, ‘Nπ’ and ‘Nτ’ for histidine,
 * according to the numbering of the corresponding α-amino acids described in P-103.1.2. …
 * When two identical substituent groups are present one letter locant is used between the
 * multiplicative prefix and the name of the substituent group.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1400, P-103.2.1, example 5. [corrected 17 October 2018]
 *     Replace the structure with:
 *   Page 1400, P-103.2.1, example 6. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103210a.gif', name: 'Nτ-methyl-L-histidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103210b.gif', name: 'Nα,Nτ-dimethyl-L-histidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103210c.gif', name: 'N-[(9H-fluoren-9-ylmethoxy)carbonyl]-L-alanine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103210d.gif', name: 'N²-(tert-butoxycarbonyl)-L-lysine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103210e.gif', name: 'N⁵-acetyl-N²-[(benzyloxy)carbonyl]-L-glutamine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103210f.gif', name: 'Nα-{[(4-nitrobenzyl)oxy]carbonyl}-Nω-nitro-L-arginine' },
]);
