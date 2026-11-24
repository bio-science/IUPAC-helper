/**
 * P-72.2.2.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acid esters of organic acids
 * Preferred IUPAC names of acid esters of ‘organic acids’ as discussed in P-65 are formed
 * substitutively (see P-65.6.3.3.5) rather than by the method of ‘hydrogen salts’. Preferred IUPAC
 * names of acid esters of inorganic acids as discussed in P-67.1.3.2 are formed by the method of
 * ‘hydrogen salts’; see P-65.6.2.3 and P-65.6.3.3.5.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.2.2.1.2', [
  { formula: 'HOOC-[CH2]4-CO-O⁻', pin: '5-carboxypentanoate', otherNames: ['hydrogen hexanedioate'] },
  { formula: 'C6H5-P(O)(OH)-O⁻', pin: 'hydrogen phenylphosphonate', notNames: ['hydroxy(phenyl)phosphinate'] },
  { formula: 'CH3-CH2-O-CO-CH2-CH2-CO-O⁻', pin: '4-ethoxy-4-oxobutanoate', otherNames: ['ethyl butanedioate', 'ethyl succinate'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222c.gif', pin: 'phenyl hydrogen phosphate' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222d.gif', pin: '2-(carboxymethyl)-4-ethoxy-2-hydroxy-4-oxobutanoate', otherNames: ['4-ethyl 2-(carboxymethyl)-2-hydroxybutanedioate', '3-ethyl 1-hydrogen citrate', '4-hydrogen 2-(2-ethoxy-2-oxoethyl)-2-hydroxybutanedioate'] },
]);
