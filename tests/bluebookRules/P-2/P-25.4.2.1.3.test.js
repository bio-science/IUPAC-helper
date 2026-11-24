/**
 * P-25.4.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Divalent cyclic hydrocarbon bridges not named in P-25.4.2.1.2 are named as a prefix derived from
 * the corresponding hydrocarbon name by replacing the terminal letter ‘e’ by ‘o’. If the name of the
 * bridge is the same as the name of the fusion prefix, the bridge prefix is distinguished by the
 * prefix ‘epi-’. [CAS uses the italicized prefix ‘endo’.] The letter ‘i’ is elided if followed by a
 * vowel. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 267, P-25.4.2.1.3, replace structure of example 2 on this page. [corrected 26 January 2022]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250402g.gif', notNames: ['[1,2]epibenzo'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250402h.gif', notNames: ['[1,3]epibenzo'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250402i.gif', notNames: ['[1,2]epinaphtho'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250402j.gif', notNames: ['[1,3]indeno'] },
]);
