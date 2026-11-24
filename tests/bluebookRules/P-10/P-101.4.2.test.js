/**
 * P-101.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement of carbon atoms by heteroatoms
 * Heteroatoms are denoted by ‘a’ prefixes that are cited before nondetachable prefixes expressing
 * skeletal modifications in fundamental parent structures, each with a locant to indicate its
 * position; the fixed numbering of the parent structure is maintained. Skeletal modifications, if any,
 * must be completed before skeletal replacement (‘a’) nomenclature can be applied.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101420a.gif', name: '3-azaambrosane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101420b.gif', name: '3-tellura-4a-homo-5α-androstane' },
]);
