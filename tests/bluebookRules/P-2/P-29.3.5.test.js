/**
 * P-29.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent prefixes derived from ring assemblies
 * Names of ring assemblies composed of two identical rings or ring systems are formed as described in
 * Section P-28.2, and those derived from ring assemblies composed of three through six identical rings
 * or ring systems are described in P-28.3. Ring assemblies consisting of more than six rings or ring
 * assemblies are named by phane nomenclature as described in P-28.5. Low locants are assigned to ring
 * junctions, then to free valences.
 * Names of substituent groups derived from ring assemblies are written in two ways:
 * (1) the suffix ‘yl’ is added to the name biphenyl;
 * (2) names denoted by locants are placed in brackets; the suffixes ‘yl’ and ‘ylidene’ are added with
 * elision of the final letter ‘e’ in the name of the parent hydride.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290305h.gif', name: '1,2′-binaphthyl]-4(1H)-ylidene' },
]);
